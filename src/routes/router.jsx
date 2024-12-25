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
            loader: ()=>fetch('http://localhost:5000/tutors')
        },
        {
            path: "/add-tutorial",
            element: <AddTutorial></AddTutorial>
        },
        {
            path: "/my-tutorials",
            element: <MyTutorials></MyTutorials>,
        },
        {
            path: "/my-booked-tutors",
            element: <MyBookedTutors></MyBookedTutors>,
            // loader: ()=>fetch(`http://localhost:5000/my-booked-tutors`)
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
          element: <TutorDetails></TutorDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/tutor/${params.id}`)
        },
        {
          path: '/tutors/:id',
          element: <Update></Update>,
          // loader: ({params})=>fetch(`http://localhost:5000/tutors/${params.id}`)
        }
      ]
    },
  ]);

export default router;