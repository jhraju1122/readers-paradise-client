import { Link } from "react-router-dom";

 
const AddBooks = () => {
    const handleAddBook = event =>{
        event.preventDefault();
       
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

            <form className="card-body">
              <div className="form-control">
               <h1 className="text-3xl text-slate-400 text-center mt-5 mb-5">Add Book</h1>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <input type="number" placeholder="Quantity" name="Number" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <Link className="btn btn-primary" type="submit">Add Book</Link>
              </div>
            </form>

          </div>
        </div>
      </div>
    );
};

export default AddBooks;