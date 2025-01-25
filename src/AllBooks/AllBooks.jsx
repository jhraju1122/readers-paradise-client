 import { useLoaderData } from 'react-router-dom';
import NewAddBooks from '../pages/BookCard/NewAddBooks';

const AllBooks = () => {
     
    const books = useLoaderData();


    return (
        <div className='grid grid-cols-2'>
         
            {
                books.map((book) => (
                    <NewAddBooks
                    key={book.id}
                    book={book}
                    ></NewAddBooks>
                ))
            }
        </div>
    );
};

export default AllBooks;