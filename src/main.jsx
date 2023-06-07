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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
          {

            path: "/",
            element:<HomePage></HomePage>
          },
          {

            path: "/login",
            element: <LoginPage></LoginPage>,
          }
        ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
