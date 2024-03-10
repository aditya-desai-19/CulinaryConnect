import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

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
        ]
    }
]);

export default Router;