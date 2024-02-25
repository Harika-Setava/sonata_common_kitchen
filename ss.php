<?php
// Database connection parameters
    // $servername = "localhost";
    // $username = "root";
    // $password = "Rooter@123";
    // $database = "college";
    $username = $_POST['username'];
    $password = $_POST['password'];

    if(!empty($username)||!empty($password)){

    }
    else{
        echo "All fields are required";
        die();
    }
// Create connection
$conn = new mysqli($localhost, $root, $Rooter@123, $college);
if(mysqli_connect_error()){
    die('Connect Error('.mysqli_connect_error().')'.mysqli_connect_error());
}else{
    $select="select username from student1 where username=? Limit 1";
    $insert= "insert into student1(username,password)values(?,?)";
    $stmt=$conn->prepare($select);
    $stmt->bind_param("s",$username);
    $stmt->execute();
    $stmt->bind_result($username);
    $stmt->store_result();
    $rnum=$stmt->num_rows;
    if($rnum==0){
        $stmt->close();
        $stmt=$conn->prepare($insert);
        $stmt->bind_param("ss", $username,$password);
        $stmt->execute();
        echo "New Record inserted Successfully";
    }
    else{
        echo "Someone already register using this email";

    }
    $stmt->close();
    $conn->close();
}

// // Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }
// else{
//     $stmt=$conn->prepare("insert into student1(username,password)values(?,?)");
//     $stmt->bind_param("ss",$username,$password);
//     $stmt->execute();
//     echo="login Successfully";
//     $stmt->close();
//     $com->close();
// }

// Retrieve form data


// // Query the database (using prepared statements to prevent SQL injection)
// $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
// $stmt->bind_param("ss", $username, $password);
// $stmt->execute();
// $result = $stmt->get_result();

// if ($result->num_rows > 0) {
//     // Login successful
//     echo "Login successful!";
//     // Redirect to another page or perform further actions
// } else {
//     // Login failed
//     echo "Invalid username or password!";
// }

// $stmt->close();
// $conn->close();
?>