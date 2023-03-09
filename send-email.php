<?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
          $sender_name = $_POST['sender_name'];
          $sender_email = $_POST['sender_email'];
          $email_subject = $_POST['email_subject'];
          $email_body = $_POST['email_body'];
        
          // Construct the email headers and body
          $to = "memoirspathos@gmail.com"; // Replace with your own email address
          $headers = "From: $sender_name <$sender_email>" . "\r\n";
          $headers .= "Reply-To: $sender_email" . "\r\n";
          $headers .= "MIME-Version: 1.0" . "\r\n";
          $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
          $message = "<html><body>";
          $message .= "<h2>$email_subject</h2>";
          $message .= "<p>$email_body</p>";
          $message .= "</body></html>";
        
          // Send the email
          if (mail($to, $email_subject, $message, $headers)) {
            echo "<p>Your message has been sent!</p>";
          } else {
            echo "<p>There was an error sending your message. Please try again later.</p>";
          }
        }
        ?>