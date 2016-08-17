<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <script src="main.js"></script>
</head>
<body>

 <!--NavBar-->
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
      <a class="navbar-brand" href="#">Gallary</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="gallary.html">The Art</a></li>
        <li><a href="events.html">Events</a></li>
        <li><a href="contact.php">Contact</a></li>
        <li><a href="location.html">Location</a></li>
      </ul>
    </div>
  </div>
</nav>

<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "testDB";

$name = $email = $comment = "";
$nameErr = $emailErr = $commentErr = "";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}    

//Security
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}


//User Summits Form   
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } 
  else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed"; 
      $name = "";
    }
}
    
if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format"; 
      $email = "";
    }
  }
    
if (empty($_POST["comment"])) {
    $commentErr = "Comment is required";
  } else {
    $comment = test_input($_POST["comment"]);
  }    
}
if($name != "" && $email != "" && $comment != ""){
    $sql = "INSERT INTO comments (name, email, comment)
    VALUES ('$name', '$email', '$comment')";

    if ($conn->query($sql) !== TRUE) {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>
<div>
   <!--comment form--> 
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> 
    <p>Name:</p><input type="text" name="name">
    <span class="error"> <?php echo $nameErr;?></span><br><br>
    <p>E-mail:</p><input type="text" name="email">
    <span class="error"> <?php echo $emailErr;?></span><br><br>
    <p>Message:<p><textarea name="comment" rows="5" cols="40"></textarea>
    <span class="error"><?php echo $commentErr;?></span><br><br>
    <input type="submit" value="Send Message" style="background-color: #666666; color: white; width: 305px; height: 40px; font-family: century gothic;">
    </form>
</div>

</body>
</html>