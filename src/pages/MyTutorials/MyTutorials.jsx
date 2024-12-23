import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyTutorials = () => {
    const myTutorials = useLoaderData();
    const {_id, name, image, language, price, tutorEmail, description, email} = myTutorials || {};
    console.log(myTutorials);
    
    return (
        <div className='my-10 md:my-14'>
           <h2 className='text-3xl font-bold mb-4'>My Total Tutorials: {myTutorials.length}</h2> 
           <div className="overflow-x-auto">
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
      </tr>
    </thead>
    <tbody>

      {
        myTutorials.map(tutorial => <tr>
            <th>
              <img className='w-14 ' src={tutorial.image} alt="" />
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-bold">{tutorial.name}</div>
                </div>
              </div>
            </td>
            <td>{tutorial.language}</td>
            <td>${tutorial.price}</td>
            <td>{tutorial.review}</td>
            <td>{tutorial.description}</td>
            <th><button className="btn btn-ghost btn-xs bg-yellow-300">Update</button></th>
            <th><button className="btn btn-ghost btn-xs bg-red-300">Delete</button></th>
          </tr> )
      }
 
    </tbody>

  </table>
</div>
        </div>
    );
};

export default MyTutorials;