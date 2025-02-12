import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import FindTutors from '../pages/FindTutors/FindTutors';
import AddTutor from '../pages/AddTutor/AddTutorial';
import MyTutorials from '../pages/MyTutorials/MyTutorials';
import MyBookedTutors from '../pages/MyBookedTutors/MyBookedTutors';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import AddTutorial from '../pages/AddTutor/AddTutorial';
import TutorDetails from '../pages/TutorDetails/TutorDetails';
import Update from '../pages/Update/Update';
import PrivateRoute from './PrivateRoute';
import Blogs from '../pages/Blogs/Blogs';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/find-tutors",
            element: <FindTutors></FindTutors>,
            loader: ()=>fetch('https://learn-lang-server-19ri7crg9-ar-rafis-projects.vercel.app/tutors')
        },
        {
          path: "/find-tutors/:category",
          element: <FindTutors></FindTutors>,
          // loader: ({params})=>fetch(`https://learn-lang-server-19ri7crg9-ar-rafis-projects.vercel.app/tutors?${params.category}`)
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>
        },
        {
            path: "/add-tutorial",
            element: <PrivateRoute><AddTutorial></AddTutorial></PrivateRoute>
        },
        {
            path: "/my-tutorials",
            element: <PrivateRoute><MyTutorials></MyTutorials></PrivateRoute>,
        },
        {
            path: "/my-booked-tutors",
            element: <PrivateRoute><MyBookedTutors></MyBookedTutors></PrivateRoute>,
            // loader: ()=>fetch(`https://learn-lang-server-19ri7crg9-ar-rafis-projects.vercel.app/my-booked-tutors`)
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/tutor/:id",
          element: <PrivateRoute><TutorDetails></TutorDetails></PrivateRoute>,
          // loader: ({params}) => fetch(`https://learn-lang-server-19ri7crg9-ar-rafis-projects.vercel.app/tutor/${params.id}`)
        },
        {
          path: '/tutors/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute>,
          // loader: ({params})=>fetch(`https://learn-lang-server-19ri7crg9-ar-rafis-projects.vercel.app/tutors/${params.id}`)
        }
      ]
    },
  ]);

export default router;