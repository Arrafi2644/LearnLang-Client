import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import Swal from 'sweetalert2';
import MyTutorialRow from '../../components/MyTutorialRow/MyTutorialRow';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyTutorials = () => {
  const { user } = useAuth()
  const [myTutorials, setMyTutorials] = useState([]);
  const email = (user?.email);
  const axiosInstance = useAxiosSecure()
  // const myTutorials = useLoaderData();
  useEffect(() => {
    // axios.get(`https://learn-lang-server-rose.vercel.app/tutors/user/${email}`, {withCredentials: true})
    //   .then(res => {
    //     setMyTutorials(res.data);
    //   })

    axiosInstance.get(`/tutors/user/${email}`)
      .then(res => {
        setMyTutorials(res.data);
      })

  }, [])

  const handleDeleteTutorial = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {


        axios.delete(`https://learn-lang-server-rose.vercel.app/tutors/myTutorials/${id}`)
          .then(res => {
            // console.log(res.data);
            if (res.data.deletedCount > 0) {

              Swal.fire({
                title: "Deleted!",
                text: "Your tutorial has been deleted.",
                icon: "success"
              });

              const remaining = myTutorials.filter(tutorial => tutorial._id !== id)
              setMyTutorials(remaining)
            }

          })
          .catch(err => {
            // console.log(err);
          })

      }
    });

  }





  return (
    <div className='my-10 md:my-14 mx-4'>
      <h2 className='text-3xl md:text-4xl text-primary-light font-bold mb-4'>My Total Tutorials: {myTutorials.length}</h2>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Language</th>
              <th>Price</th>
              <th>Reviews</th>
              <th>description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {
              myTutorials.map(tutorial => <MyTutorialRow key={tutorial._id} handleDeleteTutorial={handleDeleteTutorial} tutorial={tutorial}></MyTutorialRow>)

            }

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MyTutorials;