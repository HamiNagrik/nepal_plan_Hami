<?php
header('Content-Type: text/html; charset=UTF-8');

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    
    // Validate data
    $errors = [];
    
    if (empty($name)) {
        $errors[] = 'नाम आवश्यक छ';
    }
    
    if (empty($email)) {
        $errors[] = 'इमेल आवश्यक छ';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'अमान्य इमेल ठेगाना';
    }
    
    if (empty($subject)) {
        $errors[] = 'विषय आवश्यक छ';
    }
    
    if (empty($message)) {
        $errors[] = 'सन्देश आवश्यक छ';
    } elseif (strlen($message) < 10) {
        $errors[] = 'सन्देश धेरै छोटो छ (कम्तिमा १० अक्षर)';
    }
    
    // If no errors, process the form
    if (empty($errors)) {
        // Database connection (example using MySQLi)
        $dbHost = 'MongoDB';
        $dbUser = 'plannepal';
        $dbPass = 'mongodb+srv://plannepal:SAVEearth1234@cluster0.7l2bl.mongodb.net/';
        $dbName = 'plannepal';
        
        $conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
        
        if ($conn->connect_error) {
            die("कनेक्सन असफल: " . $conn->connect_error);
        }
        
        // Set charset
        $conn->set_charset("utf8");
        
        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $name, $email, $subject, $message);
        
        // Execute
        if ($stmt->execute()) {
            // Send email notification (example)
            $to = "subash@news--war.com";
            $emailSubject = "नयाँ सम्पर्क फारम प्रविष्टि: " . $subject;
            $emailMessage = "तपाईंलाई नयाँ सम्पर्क फारम प्राप्त भएको छ:\n\n";
            $emailMessage .= "नाम: $name\n";
            $emailMessage .= "इमेल: $email\n";
            $emailMessage .= "विषय: $subject\n";
            $emailMessage .= "सन्देश:\n$message\n";
            
            $headers = "From: $email\r\n";
            $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
            
            mail($to, $emailSubject, $emailMessage, $headers);
            
            // Redirect to thank you page
            header("Location: contact.html");
            exit();
        } else {
            $errors[] = "डाटाबेसमा बचत गर्दा त्रुटि: " . $conn->error;
        }
        
        $stmt->close();
        $conn->close();
    }
    
    // If there are errors, display them
    if (!empty($errors)) {
        echo '<!DOCTYPE html>
        <html lang="ne">
        <head>
            <meta charset="UTF-8">
            <title>त्रुटि</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="contact-container">
                <h2>फारम पेश गर्दा त्रुटि</h2>
                <div class="error-messages">';
        
        foreach ($errors as $error) {
            echo '<p class="error">' . htmlspecialchars($error) . '</p>';
        }
        
        echo '</div>
                <a href="index.html" class="submit-btn">फिर्ता जानुहोस्</a>
            </div>
        </body>
        </html>';
        exit();
    }
} else {
    // If someone tries to access this page directly
    header("Location: index.html");
    exit();
}
?>