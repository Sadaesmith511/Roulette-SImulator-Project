<?php
    include("SignUp.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
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
<header>
    <nav>
            <div class="pagetabs">
                <ul>
                    <li><a href="MainPage.html">HOME</a></li>
                    <li><a href="GamePage.html">PLAY</a></li>
                    <li><a href="">LEADERBOARD</a></li>
                    <li><a href="">STATS</a></li>
                </ul>
            </div>
        </nav>

</header>
<body>
<form action="SignUpIndex.php" method="post">
    <div class="form1">
        <h1>Sign Up</h1>
        
            <input type="text" placeholder="Username" name="Username" id="Username" required><br>
            <input type="text" placeholder="Password" name="Password" id="Password"  required>
            <input type="text" placeholder="First Name" name="FirstName" id="FirstName" required>
            <input type="text" placeholder="Last Name" name="LastName" id="LastName" required>
            <input type="number" placeholder="Age" name="StudentAge" id="StudentAge" required>
            <div class="form2">
            <br><label for="Student major">Major:</label>
            <select name="major" id="major">
                <option selected hidden value="">Select an Option</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Finance">Finance</option>
                <option value="Math">Math</option>
                <option value="Nursing">Nursing</option>
                <option value="Geology">Geology</option>
                <option value="Business">Business</option>
                <option value="Education">Education</option>
                <option value="Communication/Media Studies">Communication/Media Studies</option>
                <option value="Other">Other</option>
            </select>
            <br><label for="Student Gender">Gender:</label>
                <select name="Gender" id="Gender">
                <option selected hidden value="">Select an Option</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="PrefNot">Prefer Not to Say</option>
            </select>
            <br><label for="Student Graduate">Are you a Graduate?:</label>
            <select name="Graduate" id="Graduate">
                <option selected hidden value="">Select an Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

        </div>
        <button type="submit">Register</button>
        </form>
        <div class="signup">
            Already have an account?<a href="newlogin.html"> Login Here</a>
        </div>
    </div>
</body>
</html>