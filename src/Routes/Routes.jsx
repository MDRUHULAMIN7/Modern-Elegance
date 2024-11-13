import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";










export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <p>errorPage</p>,
      children:[
        {
         path:"/",
         element:<Home> </Home>,
        },
      ]

    },
  ]);