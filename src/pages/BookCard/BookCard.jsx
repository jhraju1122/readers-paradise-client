import React from 'react';

const BookCard = ({item}) => {
    const {id, name, recipe, image, category, price} = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{id}</h2>
    <p>{name}</p>
    <p>{recipe}</p>
    <p>{category}</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default BookCard;