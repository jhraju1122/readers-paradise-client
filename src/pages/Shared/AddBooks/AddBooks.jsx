import { Link } from "react-router-dom";

 
const AddBooks = () => {
    const handleAddBook = e =>{
        e.preventDefault();
        const form = e.target;
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const author = e.target.author.value;
        const details = e.target.details.value;
        const price = e.target.price.value;
        const category = e.target.category.value;
        const photo = e.target.photo.value;
     
        const addBook = {name, quantity, author, details, price, category, photo};
        console.log(addBook);
    }

    return (
      <div className="bg-[#F4F3F0] p-24">
      <h1 className="mb-5 text-slate-400 text-3xl font-extrabold">add a Book</h1>
      <form onSubmit={handleAddBook} >
         {/* form name and Quantity row  */}
      <div className="md:flex w-[100%] justify-center mb-3 gap-3">
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
      <input type="text" className="grow" name="name" placeholder="Book Name" />
      </div>
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
      <input type="text" className="grow" name="quantity" placeholder="Available Quantity" />
      </div >
      </div>
         {/* form supplier row  */}
      <div className="md:flex w-[100%] justify-center mb-3 gap-3">
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
      <input type="text" className="grow" name="author" placeholder="Author" />
      </div>
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
      <input type="text" className="grow" name="details" placeholder="Details" />
      </div >
      </div>
         {/* form teste row  */}
      <div className="md:flex w-[100%] justify-center mb-3 gap-3">
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
      <input type="text" className="grow" name="price" placeholder="price" />
      </div>
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
      <input type="text" className="grow" name="category" placeholder="Category" />
      </div >
      </div>
      <div className="input input-bordered flex items-center gap-2 md:w-full">
      <input type="text" className="grow text-center" name="photo"  placeholder="Photo Url" />
      </div >

          <button type='submit' className="btn mt-5 w-full font-bold text-xl">Add Book</button>
      </form>
     </div>
    );
};

export default AddBooks;