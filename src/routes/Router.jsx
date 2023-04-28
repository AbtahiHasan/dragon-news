import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layouts/MainLayout";
import Categories from "../components/Categories";
import NewsLayout from "../layouts/NewsLayout";
import News from "../components/News";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout/>,
        children: [
            {
                path: "/",
                element: <Navigate to="/categories/0"/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    },
    {
        path: "/categories",
        element: <MainLayout/>,
        children: [
            {
                path: ":id",
                element: <Categories/>
            }
        ]
    },
    {
        path: "/news",
        element: <NewsLayout/>,
        children: [
            {
                path: ":id",
                element: <News/>
            }
        ]
    }
])

export default Router