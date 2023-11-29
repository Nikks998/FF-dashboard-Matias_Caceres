import PropTypes from 'prop-types'

export const TableItem = ({title, length, rating, genre, awards}) => {
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