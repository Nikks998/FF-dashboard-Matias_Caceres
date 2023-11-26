import PropTypes from 'prop-types'

export const TableItem = ({title, length, rating, genres, awards}) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{length}</td>
            <td>{rating}</td>
            <td>
                <ul>
                    {
                        genres.map((genre, index) => <li key={index}>{genre}</li> )
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
    rating: PropTypes.number,
    genres: PropTypes.array,
    awards: PropTypes.number
}

TableItem.defaultProps = {
    genres: ["Sin genero asignado"]
}