import React from 'react';
import { Link } from 'react-router-dom';

const MyTutorialRow = ({tutorial, handleDeleteTutorial}) => {
    // console.log(tutorial);

  const {_id, name, email, language, price, review, description, image, tutorImage} = tutorial;
    return (
          <tr>
            <th>
              <img className='w-14 h-14 object-cover' src={image} alt="" />
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-bold">{name}</div>
                </div>
              </div>
            </td>
            <td>{language}</td>
            <td>${price}</td>
            <td>{review}</td>
            <td>{description}</td>
            <td>
            <Link to={`/tutors/${_id}`} className="btn btn-ghost btn-xs text-text-light bg-accent-light hover:bg-accent-dark mr-1">Update</Link>
            <Link onClick={()=>handleDeleteTutorial(tutorial._id)} className="btn btn-ghost btn-xs text-text-light bg-red-300">Delete</Link>
            </td>
          </tr> )

};

export default MyTutorialRow;