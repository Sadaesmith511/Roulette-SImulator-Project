<?php
   $username=$_POST['Username'];
   //$username="Jacob2";
   //$password="J123";
    $password=$_POST['Password'];

    //$conn=new mysqli('localhost','root','','test1');
    //if($$conn->connect_error)
   // {
     //   die("Connection Failed".$conn->connect_error);
    //}
    //$stmt=$conn->prepare("insert into registration(Uname, Password)")
    //values(?, ?);
    //$stmt->bind_param("ss",$Uname, $Password);
    //$stmt->execute();
    //echo "registration Successfully";
    //$stmt->close();
    //$conn->close();

    $conn=new mysqli('localhost','root','','thetempdatabase');

    $sql="insert into logintable values('$username','$password')";

    $rs=mysqli_query($conn,$sql);

    if ($rs)
    {
        echo "Record Inserted";
    }

?>

