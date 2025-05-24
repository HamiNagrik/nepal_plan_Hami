<?php
// Set content type to JSON
header('Content-Type: application/json');

// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database configuration (if you want to store submissions)
$db_host = 'localhost'; // or your database host
$db_name = 'u208641053_plan_nepal';
$db_user = 'u208641053_subash';
$db_pass = 'SAVEearth1234%';

// Email configuration
$to_email = 'subash@news--war.com';
$subject_prefix = 'Contact Form Submission: ';

// Response array
$response = array(
    'success' => false,
    'message' => '',
    'errors' => array()
);

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize input data
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    // Validate inputs
    if (empty($name)) {
        $response['errors']['name'] = 'Name is required';
    }
    
    if (empty($email)) {
        $response['errors']['email'] = 'Email is required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['errors']['email'] = 'Invalid email format';
    }
    
    if (empty($subject)) {
        $response['errors']['subject'] = 'Subject is required';
    }
    
    if (empty($message)) {
        $response['errors']['message'] = 'Message is required';
    } elseif (strlen($message) < 10) {
        $response['errors']['message'] = 'Message should be at least 10 characters';
    }

    // If no errors, process the form
    if (empty($response['errors'])) {
        try {
            // Connect to database (optional)
            $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8", $db_user, $db_pass);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Insert into database (optional)
            $stmt = $pdo->prepare("INSERT INTO contact_submissions (name, email, subject, message, created_at) 
                                  VALUES (:name, :email, :subject, :message, NOW())");
            $stmt->execute(array(
                ':name' => $name,
                ':email' => $email,
                ':subject' => $subject,
                ':message' => $message
            ));

            // Prepare email
            $email_subject = $subject_prefix . $subject;
            $email_message = "You have received a new contact form submission:\n\n";
            $email_message .= "Name: $name\n";
            $email_message .= "Email: $email\n";
            $email_message .= "Subject: $subject\n\n";
            $email_message .= "Message:\n$message\n";
            $headers = "From: $email" . "\r\n" .
                       "Reply-To: $email" . "\r\n" .
                       'X-Mailer: PHP/' . phpversion();

            // Send email
            $mail_sent = mail($to_email, $email_subject, $email_message, $headers);

            if ($mail_sent) {
                $response['success'] = true;
                $response['message'] = 'Thank you! Your message has been sent successfully.';
            } else {
                $response['message'] = 'There was a problem sending your message. Please try again later.';
            }

        } catch(PDOException $e) {
            // Database error
            $response['message'] = 'Database error: ' . $e->getMessage();
        } catch(Exception $e) {
            // General error
            $response['message'] = 'Error: ' . $e->getMessage();
        }
    } else {
        $response['message'] = 'Please correct the errors in the form.';
    }
} else {
    $response['message'] = 'Invalid request method.';
}

// Return JSON response
echo json_encode($response);
exit();
?>

       