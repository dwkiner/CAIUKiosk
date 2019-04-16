<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.office365.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'ipadkiosk@caiu.org';                     // SMTP username
    $mail->Password   = 'Lb5g4S7Afd';                               // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to
    //Recipients
    $mail->setFrom('ipadkiosk@caiu.org', 'Ipad Kiosk');
    $mail->addAddress('helpdesk@caiu.org');               // Name is optional
    //$mail->addCC('techintern1@caiu.org'); //for testing


    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $_POST['subject'];
    $mail->Body    = nl2br("#requester "  .$_POST['email'] ." \r\n #group 21012644 \r\n " ._POST[`body`]);
    

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;

	
}
?>
<?php header( 'Location: /thanks.html' ) ;  ?>