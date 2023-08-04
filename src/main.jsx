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
import Payment from './Pages/UserPages/UserDashbordPages/Payment/Payment.jsx';
import IstrctorPrivate from './Components/PrivateRoute/IstrctorPrivate.jsx';
import AdminRoute from './Components/PrivateRoute/AdminRoute.jsx';
import EnrollClass from './Pages/UserPages/UserDashbordPages/EnrollClass/EnrollClass.jsx';
import PaymentHis from './Pages/UserPages/UserDashbordPages/PaymentHistory/PaymentHis.jsx';





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
        element: <DashboardHome></DashboardHome>
      },
      {
        path: "/dashboard/bookmarkedclasses",
        element: <PrivateRoute><UserDashBookmark></UserDashBookmark></PrivateRoute>
      },
      {
        path: "/dashboard/enrolledclasses",
        element: <PrivateRoute><EnrollClass></EnrollClass></PrivateRoute>
      },
      {
        path: "/dashboard/history",
        element: <PrivateRoute><PaymentHis></PaymentHis> </PrivateRoute>
      },

      {
        path: "/dashboard/payment/:id",
        element: <PrivateRoute> <Payment></Payment></PrivateRoute>,
        loader: ({ params }) => fetch(`https://ass-12-server-mu.vercel.app/paymentBookmark/${params.id}`)
      },

      // instructor route==========>>>
      {

        path: "/dashboard/addaclass",
        element: <IstrctorPrivate><AddAclass></AddAclass></IstrctorPrivate>
      },
      {

        path: "/dashboard/ALlclassesIns",
        element: <IstrctorPrivate><InstructorAllclass></InstructorAllclass></IstrctorPrivate>,
      },
      {
        path: '/dashboard/updateDetails/:id',
        element: <IstrctorPrivate><UpdateFrom></UpdateFrom></IstrctorPrivate>,
        loader: ({ params }) => fetch(`https://ass-12-server-mu.vercel.app/instructorclasses/${params.id}`)

      },
      // admin routes ===========>>>>  
      {

        path: "/dashboard/menageuser",
        element: <AdminRoute> <MenageUser></MenageUser> </AdminRoute>,
      },
      {

        path: "/dashboard/manageclasses",
        element: <AdminRoute><AdminMenageClass></AdminMenageClass></AdminRoute>,
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
