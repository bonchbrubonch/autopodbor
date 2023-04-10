<?php
	$toEmail = "km@momentpodbor.ru";
	$subject = $_POST['subject'];
	$msg = $_POST['msg'];
	
	$headers = [
		'From' => 'VADEV <robot@laserp.ru>',
		'Content-type' => ' text/html',
	];

	if ($subject == '') $subject = "Новая заявка";
	
	$status = mail( $toEmail, $subject, $msg, $headers );
	
	echo $status;
?>