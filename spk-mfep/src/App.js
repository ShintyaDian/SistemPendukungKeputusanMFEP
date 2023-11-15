import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from "./component/navbar/Navbar.jsx";
import Home from './pages/home/Home.jsx';
import Info from './pages/info/Info.jsx';
import Calculate from './pages/calculate/Calculate.jsx';
import Footer from './component/footer/Footer.jsx';

const App = () => {
  const Layout=() =>{
    return(
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/info",
          element:<Info/>
        },
        {
          path: "/calculate",
          element:<Calculate/>
        },
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App