<?php
    include("Login.php");
?>
<!DOCTYPE html>
<html>
    <head>
        <link href="LoginForm.css" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Jost&display=swap" rel="stylesheet">

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="newloginform.css" rel="stylesheet">
    <link href="MainPage.css" rel="stylesheet"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Jost&display=swap" rel="stylesheet">
    <title>Document</title>
    </head>
    <body>
        <form action="conncection.php" method="post">
        <div class="survey">
            <label for="Username">Username:</label>

            <input type="text" id="Uname" name="Uname" value="" required><br><br>

            <label for="Password">Password:</label>

            <input type="text" id="Password" name="Password" value=""required><br><br>

        </div>
            <div class="borderbutton">
            <input type="submit" value="Submit"><br>
        </div>
        </form>
    </body>
</html>