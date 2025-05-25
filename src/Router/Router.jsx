import { createBrowserRouter,
    RouterProvider, 
    Outlet }
     from "react-router";
import React from 'react'


import Answers from '../assets/component/Answers';
import Form from '../assets/component/Form';
import Nav from '../assets/component/Nav';
import Dashboard from "../assets/component/Dashboard";

function Layout() {
    return (
      <>
       <Nav/>
        <Outlet />
      </>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/form", element: <Form /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/answers", element: <Answers /> },
        { path: "/answers", element: <Answers /> },
      ],
    },
  ]);

function Router() {
  return (
    <div>
<RouterProvider router={router}>

</RouterProvider>
  </div>
  )
}

export default Router