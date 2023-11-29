import { createBrowserRouter } from "react-router-dom"
import { Home } from "./components/pages/home" /* pages va fuera de componentes */
import { Layout } from "./layouts"
import { ListMovies } from "./components/pages/list-movies"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/movies',
                element: <ListMovies/>
            }
        ]
    }
])