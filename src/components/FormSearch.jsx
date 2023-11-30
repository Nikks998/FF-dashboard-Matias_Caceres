import PropTypes from 'prop-types'
import { useState } from "react"
import { Form } from "react-bootstrap"

export const FormSearch = ({getMovies}) => {

    const [valueForm, setValueForm] = useState({})

    const handleInputChange = ({target}) => {
        setValueForm({
            valueForm, 
            [target.name]: target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        getMovies(`/api/v1/movies?keyword=${valueForm.keyword}`)
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" name="keyword" placeholder="Buscar pelicula..." onChange={handleInputChange}/>
                <button type="submit" className="btn input-group-text"><i className="fa fa-search"></i></button>
            </div>
        </Form>
    )
}

FormSearch.propTypes = {
    getMovies: PropTypes.func
}