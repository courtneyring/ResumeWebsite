<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'admin@courtney-ring.com';
    $to = 'admin@courtney-ring.com';
    $subject = 'Hello';
    
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
    
    if ($_POST['submit']) {
        if (mail ($to, $subject, $body, $from)) {
            
            header("location:http://courtney-ring.com/#contact");

       
        } else {
            echo "Error. Please go back and try again.";
          
        }
    }
    
    


?>

