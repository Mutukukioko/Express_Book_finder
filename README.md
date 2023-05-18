## API Application with Express and React

This is a simple application that demonstrates the integration of Express.js and React to build an API. The application allows you to fetch a list of books from a MySQL database and display them in a React UI.

### Features
- Fetches a list of books from the MySQL database via the Express API
- Displays the list of books in a React UI
- Allows you to view details of each book, including title, author, genre, and publication year

### Technologies Used
- Node.js
- Express.js
- MySQL
- React

### Installation
1. Clone the repository or download the source code.
2. Install the dependencies for both the Express API and React app:
   ```shell
   cd api
   npm install

   cd ../app
   npm install
   ```
3. Start the Express API server:
   ```shell
   cd api
   npm start
   ```
   The API server will run on `http://localhost:3010`.

4. Start the React app:
   ```shell
   cd book-app
   npm start
   ```
   The React app will be accessible at `http://localhost:3000`.

### Usage
- Open your web browser and navigate to `http://localhost:3000` to access the React app.
- The app will fetch and display a list of books from the API.
- Click on a book to view its details.

### Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to submit a pull request.

### License
This project is licensed under the [MIT License](LICENSE).