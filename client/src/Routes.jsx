import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Search from "./components/Search";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />, 
        children: [
            {
                path: '/signup',
                element: <SignUp />, 
            },
            {
                path: '/login',
                element: <Login />, 
            },
            {
                path: '/search',
                element: <Search />, 
            },
        ]
    }
]);

export default Router;