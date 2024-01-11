const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'official_database'
});


//Importing all files into the server
app.use(express.static(__dirname));


// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle form submission
app.post('/signup', (req, res) => {
  const Username = req.body.Username;
  const Password = req.body.Password;
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const StudentAge = req.body.StudentAge;
  const Major = req.body.Major;
  const Gender = req.body.Gender;
  const Graduate = req.body.Graduate;

  // Validate the student age
  if (StudentAge > 100 || StudentAge < 0) {
    res.send('<script>alert("Invalid age"); window.location.href="/newsignupform.html";</script>');
    return;
  }

  // Check if the username already exists
  pool.query('SELECT * FROM signup WHERE username = ?', [Username], (error, results) => {
    if (error) throw error;

    if (results.length > 0) {
      // User already exists
      res.send('<script>alert("UsernameTaken");window.location.href="/newsignupform.html";</script>');
    } else {
      // Insert data into the "signup" table
      pool.query('INSERT INTO signup (username, password, first_name, last_name, age, major, gender, graduate, balance, turn_count) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 500.00, 5)', [Username, Password, FirstName, LastName, StudentAge, Major, Gender, Graduate], (error, results) => {
        if (error) {
          throw error;
        }
        res.send('<script>alert("Account Created Sucessfully");window.location.href="/GamePage.html";</script>');
      });
    }
  });
});

app.post('/login', (req, res) => {
  const Username = req.body.Username;
  const Password = req.body.Password;

  // Retrieve the user from the database
  pool.query('SELECT * FROM signup WHERE username = ? AND password = ?', [Username, Password], (error, results) => {
    if (error) throw error;
    // Check if the user exists and the password is correct
    if (results.length === 0) {
      // User not found or password incorrect
      res.send('<script>alert("Invalid Username or Password");window.location.href="/newlogin.html";</script>');
    } else {
      // Redirect user to game page
      res.send('<script>alert("Login Successful");window.location.href="/GamePage.html";</script>');

    }
  });
});
sql1="SELECT balance FROM signup";
pool.query(sql1,function(error,result) {
  if(error) throw error;
  console.log(result);
});
//b= result[0].balance;



app.get('/logout', function (req, res) {
  // Update balance and turn count in database
  var userId = req.session.userId;
  var balance = req.session.balance;
  var turnCount = req.session.turnCount;
  var sql = "UPDATE users SET balance = ?, turn_count = ? WHERE id = ?";
  db.query(sql, [balance, turnCount, userId], function (err, result) {
    if (err) throw err;
    console.log("Balance and turn count updated for user with id", userId);
  });

  // Destroy session and redirect to login page
  req.session.destroy(function (err) {
    if (err) throw err;
    res.redirect('/login');
  });
});

// Start the server
app.listen(40000, () => {
  console.log('Server started on port 40000');
});