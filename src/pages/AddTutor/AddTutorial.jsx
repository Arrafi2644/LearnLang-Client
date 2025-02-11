import React, { useContext } from 'react';
import useAuth from '../../hooks/UseAuth';
import axios from 'axios';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { ThemeContext } from '../../context/ThemeContext';

const AddTutorial = () => {
const {themeColor} = useContext(ThemeContext)
  const { user } = useAuth()
  const axiosInstance = useAxiosSecure()
  // console.log(user)
  const tutorImage = user?.photoURL

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

    const tutorialInfo = { name, email, image, language, price, review, description, tutorImage }

    axiosInstance.post(`/tutors`, tutorialInfo)
      .then(res => {
        // console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Tutorial added successful!")
        }
      })
      .catch(err => {
        toast.error("Something went wrong! Please try again.")
      })

  }
  return (
    // <h2 className='te xt-3xl font-bold text-center'>Add a Tutor</h2>

    <div className="hero  my-10 md:my-14 rounded-lg min-h-screen px-4 container mx-auto">
      <div className={`hero-content flex-col w-full md:w-11/12 lg:w-4/5 text-center mb-6 ${themeColor === 'light' ? 'text-text-light' : 'text-text-dark'}`}>
        <div className="text-center lg:text-left w-full ">
          <h1 className="text-3xl md:text-4xl text-primary-light font-bold text-center">Add Tutorial</h1>
          <p className={`py-6 text-center ${themeColor === 'light' ? 'text-text-light' : 'text-text-dark'}` }>
            Add tutorials to connect with learners and share your teaching expertise globally.
          </p>
        </div>
        <div className="card bg-secondary-light w-full rounded-lg shadow-2xl">
          <form onSubmit={handleAddTutorial} className="card-body grid grid-cols-2 gap-2 text-text-light">
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-text-light" >Name</span>
              </label>
              <input  name='name' type="text" placeholder="Name" value={user?.displayName} readOnly className="input input-bordered bg-white" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-text-light">Email</span>
              </label>
              <input name='email' type="email" placeholder="Email" value={user?.email} readOnly className="input input-bordered bg-white" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-text-light">Tutorial Image</span>
              </label>
              <input name='tutorialImage' type="url" placeholder="Tutorial image url" className="input input-bordered placeholder:text-text-light bg-white" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-text-light">Language</span>
              </label>
              {/* <input name='language' type="text" placeholder="Language" className="input input-bordered" required /> */}
              <select name='language' defaultValue="default" className="select select-bordered w-full bg-white" required>
                {/* <option disabled value="">Select Your Language</option> */}
                <option value="default"  disabled>Select a language</option>
                
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
              <input name='price' type="text" placeholder="Price" className="input input-bordered bg-white placeholder:text-text-light" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-text-light">Review</span>
              </label>
              <input name='review' type="text" defaultValue={0} readOnly placeholder="Review" className="input input-bordered text-text-light bg-white" required />
            </div>
            <div className="form-control col-span-1 md:col-span-2">
              <label className="label">
                <span className="label-text text-text-light">Description</span>
              </label>
              <textarea name='description' className="textarea textarea-bordered resize-none placeholder:text-text-light bg-white" placeholder="Description" required></textarea>
            </div>

            <div className="form-control mt-6 col-span-1 md:col-span-2">
              <button className="btn text-text-light bg-accent-light hover:bg-accent-dark hover:bg-accent-dark">Add Tutorial</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTutorial;