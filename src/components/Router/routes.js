import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home";
import AddBook from "../Form/AddBook";
import EditBook from "../Form/EditBook";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/add-book',
                element: <AddBook />
            },
            {
                path: '/book/edit/:bookId',
                element: <EditBook />
            }
        ]
    }
]);