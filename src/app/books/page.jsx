import React from 'react';
import BookCard from '../components/BookCard';

const getBooks = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!res.ok){
        throw new Error('Failed to fetch books');
    }
    return res.json();
}

const BooksPage =async () => {

const books = await getBooks();

    return (
        <div>
            <h2>Books: {books.length} </h2>

            <div className='grid grid-cols-3 gap-4'>
                {
                    books.map(book => <BookCard key={book.id} book={book}
                    ></BookCard>)
                }
            </div>
        </div>
    );
};

export default BooksPage;