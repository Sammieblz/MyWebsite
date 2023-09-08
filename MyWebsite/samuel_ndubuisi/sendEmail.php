<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set the recipient email address
$to = 'samuelndubuisi32@gmail.com';

// Set the email subject
$subject = 'New message from your website';

// Set the email body
$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Message: $message\n";

// Set the headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Send the email
$mailSent = mail($to, $subject, $body, $headers);

// Check if the email was sent successfully
if ($mailSent) {
  echo 'Email sent successfully!';
} else {
  echo 'Oops! An error occurred while sending the email.';
}
?>
