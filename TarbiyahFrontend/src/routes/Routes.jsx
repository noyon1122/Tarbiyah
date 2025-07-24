import App from "../App";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";
import Home from "../pages/public/Home";

import { createBrowserRouter } from "react-router-dom";

const router=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Registration></Registration>
            }

        ]
    }
])

export default router;