import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/UseAuth';
import axios from 'axios';
import { useLoaderData, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const Update = () => {
const [allTutorials, setAllTutorials] = useState([])
  const { user } = useAuth()
  // const data = useLoaderData()
  const params = useParams()
  const id = (params.id);

  useEffect(()=>{
    fetch(`https://learn-lang-server-rose.vercel.app/tutors`)
    .then(res => res.json())
    .then(data => setAllTutorials(data))
  }, [])

  // console.log(allTutorials);

  const tutorial = allTutorials.find(tutorial => tutorial._id === id);
  // console.log(tutorial);

  const {_id, name, email, language, price, review, description, image, tutorImage} = tutorial || {};


  // console.log(data)
  // console.log(user)
  // const tutorImage = user?.photoURL

  // console.log(id);

  const handleAddTutorial = (e) => {
    e.preventDefault()

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.tutorialImage.value;
    const language = form.language.value;
    const price = parseInt(form.price.value);
    const review = parseInt(form.review.value);
    const description = form.description.value;

    const tutorialInfo = { name, email, image, price, language, review, description, tutorImage }
    // console.log(tutorialInfo);

    axios.put(`https://learn-lang-server-rose.vercel.app/tutors/update/${id}`, tutorialInfo)
      .then(res => {
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Tutorial updated successful!")
        }
      })
      .catch(err => {
        toast.error("Something went wrong! Please try again.")
        console.log(err);
      })

  }

  return (
    <div className="hero bg-background-light my-10 md:my-14 rounded-lg min-h-screen mx-4">
      <div className="hero-content flex-col w-full md:w-11/12 lg:w-4/5">
        <div className="text-center lg:text-left w-full ">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-primary-light">Update Tutorial</h1>
          <p className="py-6 text-center text-text-light">
            Update tutorials to connect with learners and share your teaching expertise globally.
          </p>
        </div>
        <div className="card bg-secondary-light w-full rounded-lg shadow-2xl">
          <form onSubmit={handleAddTutorial} className="card-body grid grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-text-light">Name</span>
              </label>
              <input defaultValue={user?.displayName} name='name' type="text" placeholder="Name"  readOnly className="input input-bordered bg-white text-text-light" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-text-light">Email</span>
              </label>
              <input name='email' type="email" placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered bg-white text-text-light" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-text-light">Tutorial Image</span>
              </label>
              <input defaultValue={tutorImage} name='tutorialImage' type="url" placeholder="Tutorial image url" className="input input-bordered bg-white text-text-light" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-text-light">Language</span>
              </label>
              {/* <input name='language' type="text" placeholder="Language" className="input input-bordered" required /> */}
              <select name='language' defaultValue={language} className="select select-bordered w-full bg-white text-text-light" required>
                <option value={language}>{language}</option>
                <option value="English">English</option>
                <option value="Italian">Italian</option>
                <option value="Hindi">Hindi</option>
                <option value="Arabic">Arabic</option>
                <option value="Chinese">Chinese</option>
                <option value="French">French</option>
                <option value="Russian">Russian</option>
                <option value="korean">korean</option>
                <option value="Japanese">Japanese</option>
                <option value="German">German</option>
              </select>

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-text-light">Price</span>
              </label>
              <input defaultValue={price} name='price' type="text" placeholder="Price" className="input input-bordered bg-white text-text-light" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-text-light">Review</span>
              </label>
              <input name='review' type="text" defaultValue={review} readOnly placeholder="Review" className="input input-bordered bg-white text-text-light" required />
            </div>
            <div className="form-control col-span-1 md:col-span-2">
              <label className="label">
                <span className="label-text text-text-light">Description</span>
              </label>
              <textarea defaultValue={description} name='description' className="textarea textarea-bordered resize-none bg-white text-text-light" placeholder="Description" required></textarea>
            </div>

            <div className="form-control mt-6 col-span-1 md:col-span-2">
              <button className="btn text-text-light bg-accent-light hover:bg-accent-dark">Update Tutorial</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;