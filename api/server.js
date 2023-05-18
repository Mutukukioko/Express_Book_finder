const express = require('express');
const mysql = require('mysql');
const cors=require('cors');
const app = express();
const port = 3010;

app.use(cors())

// Create a connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Api'
  });
 
// Endpoint to fetch all books
app.get('/books', (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error connecting to the database:', err);
        // res.set('Access-Control-Allow-Origin', '*');
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
  
      const query = 'SELECT * FROM books';
      connection.query(query, (err, results) => {
        connection.release(); // Release the connection back to the pool
  
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }
  
        res.json(results);
      });
    });
  });
  
  app.get('/author', (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error connecting to the database:', err);
        // res.set('Access-Control-Allow-Origin', '*');
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
  
      const query = 'SELECT authors FROM books';
      connection.query(query, (err, results) => {
        connection.release(); // Release the connection back to the pool
  
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }
  
        res.json(results);
      });
    });
  });
  // Start the server
  app.listen(port, () => {
    console.log(`API server is running on http://localhost:${port}`);
  });