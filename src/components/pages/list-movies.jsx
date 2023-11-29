import { Card, CardBody, Table } from "react-bootstrap"
import { TableItem } from "../TableItem"
import { AnimatedPage } from "../AnimatedPage"
import { useEffect, useState } from "react"
import { Loading } from "../Loading"

export const ListMovies = () => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/v1/movies`)
                const result = await response.json()

                setLoading(false)
                setMovies(result.data)
            } catch (error) {
                console.log(error)
            }
        }

        getMovies()
    }, [])

    return (
        loading ? (
            <Loading />
        ) : (
            <AnimatedPage>
                <Card className="shadow">
                    <CardBody>
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
