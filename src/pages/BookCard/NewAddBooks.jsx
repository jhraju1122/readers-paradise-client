import React from 'react';
import { Link } from 'react-router-dom';

const NewAddBooks = ({book}) => {
    const {id, name, recipe, image, category, price} = book;

    const handleDelete = _id =>{
    console.log(_id);
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src= {image}
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">ID: {id}</h2>
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">Price: {price}</h2>
          <p> Category: {category}</p>
          <p> Recipe: {recipe}</p>
          <div className="card-actions justify-end grid grid-cols-1 w-[100px] ml-52">
            <Link className="btn btn-primary">Add to Cart</Link>
            <Link onClick={() => handleDelete(_id)} className="btn btn-primary bg-red-500">Delete</Link>
            <Link className="btn btn-primary">Update</Link>
           </div>
        </div>
      </div>
    );
};

export default NewAddBooks;