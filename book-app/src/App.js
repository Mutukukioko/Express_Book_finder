import React, { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    try {
      const response = await fetch("http://localhost:3010/books");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  return (
    <div class="Connntainer">
      <h1 class="btn btn-success">Books</h1>
      <div class="row">
        {books.length > 0 ? (
          books.map((book) => (
            <div
              class="card col-md-4 pt-2 pb-3 shadow rounded-3"
              key={book.id}
            >
              <div>
                <div classss="card-title ">
                  <h3>{book.title}</h3>
                </div>
                <div class="card-body ">
                  <p class="rounded ">Author: {book.author}</p>
                  <p>Genre: {book.genre}</p>
                  <p>Publication Year: {book.publication_year}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
