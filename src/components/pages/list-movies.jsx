import { Card, CardBody, Table } from "react-bootstrap"
import { TableItem } from "../TableItem"
import { AnimatedPage } from "../AnimatedPage"
import { useEffect, useState } from "react"
import { Loading } from "../Loading"

export const ListMovies = () => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState()

    const getMovies = async (endpoint = "/api/v1/movies") => {
        try {
            setLoading(true)
            const response = await fetch(`http://localhost:3001${endpoint}`)
            const result = await response.json()

            setLoading(false)
            setMovies(result.data)
            setPagination(result.meta)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getMovies()
    }, [])

    const handlePagination = async (event, endpoint) => {
        event.preventDefault()
        getMovies(endpoint)
    }

    return (
        loading ? (
            <Loading />
        ) : (
            <AnimatedPage>
                <Card className="shadow">
                    <CardBody>
                        <div className="d-flex justify-content-end">
                            <nav aria-label="Page navigation">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    {
                                        pagination.pages.map(paginate => (
                                            <li key={paginate.number} className={`page-item ${paginate.number === pagination.currentPage && 'active'}`}>
                                                <a className="page-link" href="#" onClick={() => handlePagination(event, paginate.url)}>
                                                    {paginate.number}
                                                </a>
                                            </li>
                                        ))
                                    }

                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <Table striped borderless hover>
                            <thead>
                                <tr>
                                    <th>Titulo</th>
                                    <th>Duracion</th>
                                    <th>Rating</th>
                                    <th>Generos</th>
                                    <th>Premios</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    movies.map(({ id, title, length, awards, rating, genre }) => (
                                        <TableItem
                                            key={id}
                                            title={title}
                                            awards={awards}
                                            length={length}
                                            rating={rating}
                                            genre={genre} />
                                    ))
                                }
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </AnimatedPage>
        )
    )
}
