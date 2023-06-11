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
import MenageUser from './Components/AdminComponents/MenageUser/MenageUser.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import Allinstructor from './Components/InstractorComponents/InstractorPageComponennts/Allinstructor.jsx';
import ClassPage from './Components/InstractorComponents/ClassPage/ClassPage.jsx';
import Dashboard from './Dashbord/Dashboard.jsx';
import UserDashBookmark from './Pages/UserPages/UserDashbordPages/UserDashBookmark/UserDashBookmark.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import AddAclass from './Components/InstractorComponents/AddAclass/AddAclass.jsx';
import InstructorAllclass from './Pages/InstructorPages/InstructorAllclass/InstructorAllclass.jsx';
import DashboardHome from './Dashbord/DashboardHome/DashboardHome.jsx';
import UpdateFrom from './Pages/InstructorPages/UpdateFrom/UpdateFrom.jsx';
import AdminMenageClass from './Pages/AdminPages/AdminMenageClass/AdminMenageClass.jsx';




const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {

        path: "/",
        element: <HomePage></HomePage>
      },
      {

        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {

        path: "/register",
        element: <Resister></Resister>,
      },
    
      {

        path: "/instructors",
        element: <Allinstructor></Allinstructor>,
      },
      {

        path: "/classes",
        element: <ClassPage></ClassPage>,
      },
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/dashboard',
        element:<DashboardHome></DashboardHome> 
      },
      {
        path: "/dashboard/bookmarkedclasses",
        element: <PrivateRoute><UserDashBookmark></UserDashBookmark></PrivateRoute>
      },


      // instructor route==========>>>
      {

        path: "/dashboard/addaclass",
        element: <AddAclass></AddAclass>,
      },
      {

        path: "/dashboard/ALlclassesIns",
        element: <InstructorAllclass></InstructorAllclass>,
      },
      {
        path: '/dashboard/updateDetails/:id',
        element:<UpdateFrom></UpdateFrom>,
        loader:({params})=>fetch(`http://localhost:5000/instructorclasses/${params.id}`)
       
      },
        // admin routes ===========>>>>  
      {

        path: "/dashboard/menageuser",
        element: <MenageUser></MenageUser>,
      },
      {

        path: "/dashboard/manageclasses",
        element:<AdminMenageClass></AdminMenageClass>,
      },


    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
