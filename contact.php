<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Your Webmail email address (from Hostinger's Webmail)
    $to = "dathan468@gmail.com";  // Replace with your admin email
    $subject = "New Contact Form Submission";
    
    // Email body
    $body = "You have received a new message from the contact form on your website.\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";
    
    // Headers for the email
    $headers = "From: devadathan468@gmail.com\r\n"; // Replace with your Webmail email
    $headers .= "Reply-To: $email\r\n"; // Reply to the user's email
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
