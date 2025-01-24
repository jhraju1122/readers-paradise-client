import React, { useEffect, useState } from 'react';
import TopRatedBook from './TopRatedBook';

const TopRatedBooks = () => {
  
    const [books, setBooks] = useState([]);
    
    useEffect(() =>{
    fetch('manu.json')
    .then(res => res.json())
    .then(data => setBooks(data))
    }, [])

  return (
    <div>
   
      <div>    
      <h1 className='text-3xl font-bold mb-3 mt-10 text-red-400'>---Top Rated Books---{books.length} </h1>
       
       <div className='grid grid-cols-3'>
       {
        books.map(book => <TopRatedBook key={book.id} book={book}></TopRatedBook>)
       }
       </div>
      </div>
 

    </div>
  );
};

export default TopRatedBooks;