import { createBrowserRouter } from "react-router-dom";
import Root from './Root'
import HomePage from '../pages/HomePage'
import NosLivres from "../pages/NosLivres";
import Mangas from "../pages/Mangas";
import Inscription from '../pages/Inscription'
import Connexion from '../pages/Connexion'
import Litterature from "../pages/Litterature";
import BandeDessinee from "../pages/BandeDessinee";
import DetailBook from "../pages/DetailBook";
import BooksByUnivers from "../pages/Selection";
import MentionsLegales from "../pages/MentionsLegales"
import EspacePrive from "../pages/EspacePrive"

const router = createBrowserRouter ([
    {
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/book/detail/:id',
                element: <DetailBook/>
            },
            {
                path: '/nos-livres',
                element: <NosLivres/>
            },
            {
                path: '/mangas',
                element: <Mangas/>
            },
            {
                path: '/littérature',
                element: <Litterature/>
            },
            {
                path: '/bande-dessinée',
                element: <BandeDessinee/>
            },
            {
                path: '/inscription',
                element: <Inscription/>
            },
            {
                path: '/connexion',
                element: <Connexion/>
            },
            {
                path: '/selection',
                element: <BooksByUnivers/>
            },
            {
                path: '/mentions-legales',
                element: <MentionsLegales/>
            },
            {
                path: '/espace-prive',
                element: <EspacePrive/>
            },
        ]
    }
]);

export default router;
