import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useFormik } from 'formik'
import PropTypes from 'prop-types'

export const FormMovie = ({ handleAddMovie, movie, setMovie }) => {

    const [genres, setGenres] = useState([])

    const getGenres = async () => {
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/genres`)
        const result = await response.json()
        setGenres(result.data)
    }

    useEffect(() => {
        getGenres()
    }, [])

    const formik = useFormik({
        initialValues: {
            title: "",
            length: "",
            rating: "",
            awards: "",
            release_date: "",
            genre_id: ""
        },
        onSubmit: (values) => {
            movie ? alert("actualizando..") : handleAddMovie(values)
        }
    })

    const handleCancel = () => {
        setMovie(null)
        formik.handleReset()
    }


    return (
        <Form className="row" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3 col-12">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" placeholder="Titulo de la pelicula..." name="title" onChange={formik.handleChange} value={movie ? movie.title : formik.values.title} />
            </Form.Group>
            <Form.Group className="mb-3 col-12 col-md-6">
                <Form.Label>Duracion</Form.Label>
                <Form.Control type="number" name="length" onChange={formik.handleChange} value={movie ? movie.length : formik.values.length} />
            </Form.Group>
            <Form.Group className="mb-3 col-12 col-md-6">
                <Form.Label>Rating</Form.Label>
                <Form.Control type="number" name="rating" onChange={formik.handleChange} value={movie ? movie.rating : formik.values.rating} />
            </Form.Group>
            <Form.Group className="mb-3 col-12 col-md-6">
                <Form.Label>Premios</Form.Label>
                <Form.Control type="number" name="awards" onChange={formik.handleChange} value={movie ? movie.awards : formik.values.awards} />
            </Form.Group>
            <Form.Group className="mb-3 col-12 col-md-6">
                <Form.Label>Fecha de estreno</Form.Label>
                <Form.Control type="date" name="release_date" onChange={formik.handleChange} value={movie ? movie.release_date : formik.values.release_date} />
            </Form.Group>
            <Form.Group className="mb-3 col-12">
                <Form.Label>Generos</Form.Label>
                <Form.Select className="form-control" name="genre_id" onChange={formik.handleChange} value={movie ? movie.genre_id : formik.values.genre_id}>
                    <option hidden defaultChecked>Selecciona..</option>
                    {
                        genres.map(({ name, id }) => <option key={id} value={id}>{name}</option>)
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group className="my-3 col-12">
                <div className="d-flex justify-content-between">
                    <Button onClick={handleCancel} className="col-4" variant="danger">
                        Cancelar
                    </Button>
                    <Button type="submit" className="col-4" variant="dark">
                        Guardar
                    </Button>
                </div>
            </Form.Group>
        </Form>
    )
}

FormMovie.propTypes = {
    handleAddMovie: PropTypes.func,
    movie: PropTypes.object,
    setMovie: PropTypes.func
}