import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './Components/Login/LoginPage.jsx';
import HomePage from './Pages/UserPages/HomePage/HomePage.jsx';
import Resister from './Components/Resister/Resister.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    element:<ErrorPage></ErrorPage>,
    children: [
          {

            path: "/",
            element:<HomePage></HomePage>
          },
          {

            path: "/login",
            element: <LoginPage></LoginPage>,
          },
          {

            path: "//register",
            element: <Resister></Resister>,
          }
        ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
