<?php
// Connect to the database
$servername = "localhost";
$username = "Uname";
$password = "Password";
$dbname = "official_database";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the user's login information from the form
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['Uname'];
    $password = $_POST['Password'];

    // Store the user's login information in the database
    $sql = "INSERT INTO users (Uname,Password) VALUES ('$username', '$password')";
    if ($conn->query($sql) === TRUE) {
        // Redirect the user to the game page
        echo "Login Sucessful, Welcome!";
        header("Location: GamePage.html");
        exit;
    } 
    else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>