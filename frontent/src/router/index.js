import { createBrowserRouter } from "react-router-dom";
import Add from "../pages/add";
import Home from "../pages/home";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home/>

    },
    {
        path:"/add",
        element:<Add/>

    }
])
export default router