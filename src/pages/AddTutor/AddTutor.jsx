import React from 'react';

const AddTutor = () => {
    return (
            // <h2 className='te xt-3xl font-bold text-center'>Add a Tutor</h2>
           
            <div className="hero bg-background-light my-10 md:my-14 rounded-lg min-h-screen">
                
            <div className="hero-content flex-col w-full md:w-11/12 lg:w-4/5">
              <div className="text-center lg:text-left w-full ">
               <h1 className="text-3xl font-bold text-center">Add Tutorial</h1>
                 <p className="py-6 text-center">
                 Add tutorials to connect with learners and share your teaching expertise globally.
                 </p>
              </div>
              <div className="card bg-base-100 w-full rounded-lg shadow-2xl">
                <form className="card-body grid grid-cols-2 gap-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Tutorial Image</span>
                    </label>
                    <input type="url" placeholder="Tutorial image url" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Language</span>
                    </label>
                    <input type="text" placeholder="Language" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="Price" className="input input-bordered" required />
                  </div>
                   <div className="form-control">
                    <label className="label">
                      <span className="label-text">Review</span>
                    </label>
                    <input type="text" value={0} readOnly placeholder="Review" className="input input-bordered" required />
                  </div>
                  <div className="form-control col-span-1 md:col-span-2">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered resize-none" placeholder="Description" required></textarea>
                  </div>
                  
                  <div className="form-control mt-6 col-span-1 md:col-span-2">
                    <button className="btn btn-primary">Add Tutorial</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    );
};

export default AddTutor;