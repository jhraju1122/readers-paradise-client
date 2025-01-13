import { Link } from "react-router-dom";

 
const AddBooks = () => {
    const handleAddBook = event =>{
        event.preventDefault();
        const form = event.target;
        const Name = form.name.value;
        const Quantity = form.number.value;
        console.log(Name, Quantity)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Book now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input type="number" placeholder="Quantity" name="Number" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
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