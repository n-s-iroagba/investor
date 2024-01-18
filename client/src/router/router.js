import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
export const router = createBrowserRouter([

{
    path:'/',
    element: <Home/>,
},
// {
//     path:'/practice',
//     element:<RenderPage/>
// },

// {
//     path:'/dashboard',
//     element:<Dashboard/>
// },
// {
//     path:'/login',
//     element:<Login/>
// }
// ,
// {
//     path:'/signup',
//     element:<SignUp/>
// },
// // {
// //     path:'/Re',
// //     element:<Definition/>
// // },
// {
// path:'/dashboard',
// element:<Dashboard/>
// },


])