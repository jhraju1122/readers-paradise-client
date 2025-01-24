import PropTypes from 'prop-types';

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
           <div className="card-actions justify-end">
             <button className="btn btn-primary">Add to Cart</button>
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