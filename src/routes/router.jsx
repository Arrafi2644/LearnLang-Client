import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import FindTutors from '../pages/FindTutors/FindTutors';
import AddTutor from '../pages/AddTutor/AddTutor';
import MyTutorials from '../pages/MyTutorials/MyTutorials';
import MyBookedTutors from '../pages/MyBookedTutors/MyBookedTutors';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
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
            element: <MyTutorials></MyTutorials>
        },
        {
            path: "/my-booked-tutors",
            element: <MyBookedTutors></MyBookedTutors>
        }
      ]
    },
  ]);

export default router;