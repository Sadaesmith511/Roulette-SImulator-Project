
<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

// rest of the PHP code goes here

// Set database connection variables
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'official_database';

// Connect to database
$conn = mysqli_connect($host, $user, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $username = $_POST['Username'];
    $password = $_POST['Password'];
    $first_name = $_POST['FirstName'];
    $last_name = $_POST['LastName'];
    $age = $_POST['StudentAge'];
    $major = $_POST['major'];
    $gender = $_POST['Gender'];
    $graduate = $_POST['Graduate'];

    // Create SQL query
    $sql = "INSERT INTO signup (username, password, first_name, last_name, age, major, gender, graduate) VALUES ('$username', '$password', '$first_name', '$last_name', $age, '$major', '$gender', '$graduate')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
}

// Close database connection
mysqli_close($conn);
?>
