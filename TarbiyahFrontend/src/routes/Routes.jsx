import App from "../App";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import StudentRegister from "../pages/auth/StudentRegister";
import TeacherRegister from "../pages/auth/TeacherRegister";
import Home from "../pages/public/Home";

import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/student/Dashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Courses from "../pages/public/Courses";
import ManageTeachers from "../pages/admin/ManageTeachers";
import ManageStudents from "../pages/admin/ManageStudents";
import AdminProfile from "../pages/admin/AdminProfile";
import AdminLayout from "../pages/admin/AdminLayout";
import StudentLayout from "../pages/student/StudentLayout";
import StudentProfile from "../pages/student/StudentProfile";
import MyHifz from "../pages/student/MyHifz";
import MyFees from "../pages/student/MyFees";
import CourseEnroll from "../pages/student/CourseEnroll";
import CourseDetails from "../pages/public/CourseDetails";

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
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
              path: "/courses/:id",
              element:<CourseDetails></CourseDetails>
            },
            {
                path: "/admin",
                element: <AdminLayout />, // layout with sidebar + profile
                children: [
                { path: "dashboard", element: <AdminDashboard /> },
                { path: "profile", element: <AdminProfile /> },
                { path: "teacher", element: <ManageTeachers /> },
                { path: "student", element: <ManageStudents /> },
                // add more nested routes here as needed
                ],
            },
            {
                path: "/student",
                element: <StudentLayout></StudentLayout>, // layout with sidebar + profile
                children: [
                { path: "dashboard", element: <Dashboard></Dashboard> },
                { path: "profile", element: <StudentProfile></StudentProfile> },
                { path: "hifz", element: <MyHifz></MyHifz> },
                { path: "fees", element: <MyFees /> },
                { path: "course-enroll", element: <CourseEnroll></CourseEnroll>},
                // add more nested routes here as needed
                ],
            },
            

        ]
    }
])

export default router;