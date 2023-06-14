// Import express.js
const express = require("express");
const bodyParser = require("body-parser");

// Create express app
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './app/views');

// Add static files location
app.use(express.static("static"));

// Get the functions in the db.js file to use
const db = require('./services/db');

// Create a route for root - /
app.get("/", function(req, res){
    res.render("index");
});

app.get("/shop", function(req, res){
    res.render("shop");
});


app.get('/signup', (req, res) => {
    res.render('signup', { title: 'Sign Up' });
});

// Handle the form submission
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      // Execute the query to insert the new user into the database
      await db.executeQuery('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
  
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
app.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    // Execute the query to fetch the password for the given username
    const rows = await db.executeQuery('SELECT password FROM users WHERE username = ?', [username]);

    if (rows.length === 0) {
      res.send('Invalid username');
    } else if (rows[0].password !== password) {
      res.send('Invalid password');
    } else {
      res.send('Login successful');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
});
  

app.get("/cart", function(req, res){
    res.render("cart");
});

// Create a route for testing the db
app.get("/db_test", function(req, res) {
    // Assumes a table called test_table exists in your database
    sql = 'select * from test_table';
    db.query(sql).then(results => {
        console.log(results);
        res.send(results)
    });
});

// Create a route for /goodbye
// Responds to a 'GET' request
app.get("/goodbye", function(req, res) {
    res.send("Goodbye world!");
});

// Create a dynamic route for /hello/<name>, where name is any value provided by user
// At the end of the URL
// Responds to a 'GET' request
app.get("/hello/:name", function(req, res) {
    // req.params contains any parameters in the request
    // We can examine it in the console for debugging purposes
    console.log(req.params);
    //  Retrieve the 'name' parameter and use it in a dynamically generated page
    res.send("Hello " + req.params.name);
});

// Start server on port 3000
app.listen(3000,function(){
    console.log(`Server running at http://127.0.0.1:3000/`);
});
