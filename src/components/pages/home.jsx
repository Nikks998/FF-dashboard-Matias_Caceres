import { ContentRowMovies } from "../ContentRowMovies"
import { GenresInDb } from "../GenresInDb"
import { LastMovieInDb } from "../LastMovieInDb"

export const Home = () => {
    return (
        <>
            <ContentRowMovies />
            <div className="row">
                <LastMovieInDb />
                <GenresInDb />
            </div>
        </>
    )
}
