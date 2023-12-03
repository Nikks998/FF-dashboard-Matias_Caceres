import PropTypes from 'prop-types'

export const TableItem = ({ title, length, rating, genre, awards }) => {
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
                    <button className='btn btn-outline-success btn-sm mr-3'>
                        <i className='fa fa-pencil-alt'></i>
                    </button>
                    <button className='btn btn-outline-danger btn-sm'>
                        <i className='fa fa-trash'></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}

TableItem.propTypes = {
    title: PropTypes.string,
    length: PropTypes.number,
    rating: PropTypes.string,
    genre: PropTypes.object,
    awards: PropTypes.number
}

TableItem.defaultProps = {
    genre: "Sin genero asignado"
}