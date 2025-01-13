import React from 'react';
import { Link } from 'react-router-dom';

const AddBooks = () => {
    return (
        <div>
           
         <div className="hero bg-base-200 min-h-screen">
         <div className="hero-content flex-col lg:flex-row-reverse">
         <div className="text-center lg:text-left">
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="mb-3 mt-3 text-slate-400 text-center text-3xl font-extrabold ">add a book here</h1>
{/* Form */}
          <form className="card-body">
          <div className="form-control grid grid-cols-2 gap-5">
          <input type="text" placeholder="Book Name" className="input input-bordered" required />
          <input className='input input-bordered' type="number" name="quantity" placeholder="Quantity" />
          <input className='input input-bordered' type="text" name="AuthorName" placeholder="Author Name" />

          <input className='input input-bordered' type="text" name="Category" placeholder="Category" />

          <textarea className='input input-bordered' name="description" placeholder="Description"></textarea>

          <input className='input input-bordered' type="number" name="Rating" placeholder="Rating" />

        </div>
        <div>
        <input className='input input-bordered w-full' type="text" name="photo" placeholder="Photo URL" />
        </div>
        <div className="form-control">
       
           
        </div>
        <div className="form-control mt-6">
            <Link className='btn bg-black text-white'>Add Book</Link>
         </div>
          </form>


    </div>
  </div>
</div>
        </div>
    );
};

export default AddBooks;