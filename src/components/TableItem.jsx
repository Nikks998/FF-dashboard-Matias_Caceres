import PropTypes from 'prop-types'

export const TableItem = ({ movie: {id, title,length,rating,genre,awards}, handleEditMovie, handleDeleteMovie }) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{length}</td>
            <td>{rating}</td>
            <td>
                <ul>
                    {
                        genre?.name /* genres.map((genre, index) => <li key={index}>{genre}</li> ) */
                    }
                </ul>
            </td>
            <td>{awards}</td>
            <td>
                <div className="d-flex">
                    <button className='btn btn-outline-success btn-sm mr-3' onClick={() => handleEditMovie(id)}>
                        <i className='fa fa-pencil-alt'></i>
                    </button>
                    <button className='btn btn-outline-danger btn-sm' onClick={() => handleDeleteMovie(id, title)}>
                        <i className='fa fa-trash'></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}

TableItem.propTypes = {
    movie: PropTypes.object,
    handleEditMovie: PropTypes.func,
    handleDeleteMovie: PropTypes.func
}

TableItem.defaultProps = {
    genre: "Sin genero asignado"
}