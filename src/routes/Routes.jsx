import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";

const routes = createBrowserRouter([

{
    path: "/",
    element:<Root></Root>,
    children: [

        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/login',
            element: <LoginPage></LoginPage>                   
        },
        {
            path: '/register',
            element: <RegisterPage></RegisterPage>
        }




    ]
      
    
}





]);

export default routes;