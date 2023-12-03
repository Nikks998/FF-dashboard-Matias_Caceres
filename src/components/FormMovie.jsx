import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"

export const FormMovie = () => {

    const [genres, setGenres] = useState([])

    const getGenres = async () => {
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/genres`)
        const result = await response.json()
        setGenres(result.data)
    }

    useEffect(() => {
        getGenres()
    }, [])

    return (
        <Form className="row">
            <Form.Group className="mb-3 col-12">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" placeholder="Titulo de la pelicula..." />
            </Form.Group>
            <Form.Group className="mb-3 col-12 col-md-6">
                <Form.Label>Duracion</Form.Label>
                <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3 col-12 col-md-6">
                <Form.Label>Rating</Form.Label>
                <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3 col-12 col-md-6">
                <Form.Label>Premios</Form.Label>
                <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3 col-12 col-md-6">
                <Form.Label>Fecha de estreno</Form.Label>
                <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3 col-12">
                <Form.Label>Generos</Form.Label>
                <Form.Select className="form-control">
                <option hidden defaultValue>Selecciona..</option>
                    {
                        genres.map(({name, id }) => <option key={id} value={id}>{name}</option>)
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group className="my-3 col-12">
                <Button type="submit" className="col-12" variant="dark">
                    Guardar
                </Button>
            </Form.Group>
        </Form>
    )
}
