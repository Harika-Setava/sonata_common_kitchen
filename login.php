<?php
$servername="localhost";
$username="root";
$password="Rooter@123";
$database="college";
$conn = new mysqli("localhost", "root", "Rooter@123", "college");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $username=$_POST['username'];
    $password = $_POST['password'];
    $sql="select * from college where username='$username' and password='$password'";
    $result=$conn->query($sql);
    if($result->num_rows>0){
        echo "login successfull!";
    }
    else{
        echo "Invalid usename or password";
    }
}
$conn->close();
?>