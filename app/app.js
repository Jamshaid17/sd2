// Import express.js
const express = require("express");

// Create express app
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './app/views');

// Add static files location
app.use(express.static('static'));

// Get the functions in the db.js file to use
const db = require('./services/db');

// Create a route for root - /
app.get('/', async function (req, res) {
  console.log(db);
  const products = await db.query('SELECT * FROM products; ');
  res.render('index', { products });
});

app.get('/shop', async function (req, res) {
  const products = await db.query('SELECT * FROM products; ');
  res.render('shop', { products });
});

app.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign Up' });
});

// Handle the form submission
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Establish a connection to your MySQL database
        const connection = await db.getConnection();
        
        // Execute the query to insert the new user into the database
        await connection.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);

        // Close the database connection
        connection.release();

        // Redirect the user to the login page
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering user');
    }
});

app.get("/login", function(req, res){
    res.render("login");
});

app.get("/cart", function(req, res){
    res.render("cart");
});

// Create a route for testing the db
app.get('/db_test', function (req, res) {
  // Assumes a table called test_table exists in your database
  sql = 'select * from test_table';
  db.query(sql).then((results) => {
    console.log(results);
    res.send(results);
  });
});

// Create a route for /goodbye
// Responds to a 'GET' request
app.get('/goodbye', function (req, res) {
  res.send('Goodbye world!');
});

// Create a dynamic route for /hello/<name>, where name is any value provided by user
// At the end of the URL
// Responds to a 'GET' request
app.get('/hello/:name', function (req, res) {
  // req.params contains any parameters in the request
  // We can examine it in the console for debugging purposes
  console.log(req.params);
  //  Retrieve the 'name' parameter and use it in a dynamically generated page
  res.send('Hello ' + req.params.name);
});

// Start server on port 3000
app.listen(3000, function () {
  console.log(`Server running at http://127.0.0.1:3000/`);
});
