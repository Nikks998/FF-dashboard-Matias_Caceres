import { Card, CardBody, Table } from "react-bootstrap"
import { TableItem } from "./TableItem"

export const TableMovies = () => {

    const movies = [
        {
            id: crypto.randomUUID(),
            title: "Rambo",
            length: 120,
            rating: 9,
            genres: [
                "Accion",
                "Belico"
            ],
            awards: 12
        },
        {
            id: crypto.randomUUID(),
            title: "Mi Pobre Angelito",
            length: 110,
            rating: 8,
            genres: [
                "Comedia",
                "Drama"
            ],
            awards: 8
        },
        {
            id: crypto.randomUUID(),
            title: "Batman",
            length: 130,
            rating: 15,
            genres: [
                "Accion",
                "Aventura"
            ],
            awards: 20
        },
        {
            id: crypto.randomUUID(),
            title: "Degenerada",
            length: 80,
            rating: 5,
            /* genres: null, */
            awards: 3
        }
    ]

    return (
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
                            movies.map(({ id, title, length, awards, rating, genres }) => <TableItem key={id} title={title} awards={awards} length={length} rating={rating} genres={genres} />)
                        }
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    )
}
