<?php

$to = "contact@incrivesoft.com";
$subject = "Enquiry for further details";

$message="The contact Details are:\n\n";
$message.="Full Name: ".$_REQUEST[name]."\n";

$message.="phone: ".$_REQUEST[mobilenumber]."\n";
$message.="Email: ".$_REQUEST[email]."\n";
$message.="message: ".$_REQUEST[message]."\n";
$headers  = "From:".$_REQUEST[email];

if (mail($to,$subject,$message,$headers)){
//  echo "Mail Sent!";
	header("Location:contact.php?msg=Thank you. We will get back to you shortly.");
}
else{
	header("Location:contact_us.php?msg=Failed sending email.");
//	echo "Failed sending email";
}
?>
