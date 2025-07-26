import App from "../App";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import StudentRegister from "../pages/auth/StudentRegister";
import TeacherRegister from "../pages/auth/TeacherRegister";
import Home from "../pages/public/Home";

import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/student/Dashboard";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";

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
                element:<Register></Register>
            },
            {
                path:'/register/student',
                element:<StudentRegister></StudentRegister>
            }
            ,
            {
                path:'/register/teacher',
                element:<TeacherRegister></TeacherRegister>
            },{
                path:'/student/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/teacher/dashboard',
                element:<TeacherDashboard></TeacherDashboard>
            },
            {
                path:'/admin/dashboard',
                element:<AdminDashboard></AdminDashboard>
            }

        ]
    }
])

export default router;