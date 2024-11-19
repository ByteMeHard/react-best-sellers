import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'Margaret Atwood',
    title: "The Handmaiden's Tale",
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'Snoop Dogg',
    title: 'From Crook to Cook',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81paxLbonYL._AC_UL600_SR600,400_.jpg',
    id: 2,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section>
      {books.map((book) => {
        return <Book {...book} key={id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = ({ img, title, author, getBook, id }) => {
  const getSingleBook = () => {
    return getBook(id);
  };
  return (
    <article>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => getBook(id)}>click me</button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
