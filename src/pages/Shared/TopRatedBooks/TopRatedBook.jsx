import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopRatedBook = ({book}) => {
    const {id, name, recipe, image, category, price} = book;
     return (
        <div>
           

             <div className="card bg-base-100 w-96 shadow-xl">
         <figure>
           <img
             src={image}
             alt="Shoes" />
         </figure>
         <div className="card-body">
           <h2 className="card-title font-bold text-xl"><span className='text-red-400'>ID</span>: {id}</h2>
           <p > <span className='font-bold text-xl text-red-400'>Name</span>: {name}</p>
           <p > <span className='font-bold text-xl text-red-400'>Recipe</span>: {recipe}</p>
           <p > <span className='font-bold text-xl text-red-400'>Category</span> {category}</p>
           <p > <span className='font-bold text-xl text-red-400'>Price</span>: {price}</p>
           <div className="card-actions justify-end grid grid-cols-1 ">
             <Link to='/BookDetails' className="btn btn-primary">Add to Cart</Link>
            <div className=' text-end'>
            <Link className="btn btn-primary bg-red-500 w-[100px]  ">Delete</Link>
            <Link className="btn btn-primary w-[100px] ">Update</Link>
            </div>
            
           </div>
         </div>
        </div>
        </div>
    );
};

TopRatedBook.PropTypes = {
    TopRatedBook: PropTypes.object.isRequired
}
export default TopRatedBook;

// here PropTypes have to install