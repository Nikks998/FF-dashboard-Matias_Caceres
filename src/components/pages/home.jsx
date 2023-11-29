import { AnimatedPage } from "../AnimatedPage"
import { ContentRowMovies } from "../ContentRowMovies"
import { GenresInDb } from "../GenresInDb"
import { LastMovieInDb } from "../LastMovieInDb"

export const Home = () => {
    return (
        <AnimatedPage>
            <>
                <ContentRowMovies />
                <div className="row">
                    <LastMovieInDb />
                    <GenresInDb />
                </div>
            </>
        </AnimatedPage>
    )
}
