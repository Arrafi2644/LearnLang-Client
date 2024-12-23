import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import FindTutors from '../pages/FindTutors/FindTutors';
import AddTutor from '../pages/AddTutor/AddTutor';
import MyTutorials from '../pages/MyTutorials/MyTutorials';
import MyBookedTutors from '../pages/MyBookedTutors/MyBookedTutors';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';

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
            loader: ()=>fetch('tutors.json')
        },
        {
            path: "/add-tutor",
            element: <AddTutor></AddTutor>
        },
        {
            path: "/my-tutorials",
            element: <MyTutorials></MyTutorials>,
            loader: ()=>fetch('myTutorials.json')
        },
        {
            path: "/my-booked-tutors",
            element: <MyBookedTutors></MyBookedTutors>,
            loader: ()=>fetch('tutors.json')
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);

export default router;