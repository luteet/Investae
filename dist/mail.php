<?php 
	
	// Переменные

	$name = $_POST['name'];
	$email = $_POST['email'];

	// Переменные
	
	

	// Сообщение для почты

	$message_all = 
	"Message from the site...: " .
	"\n\nName: " . $name.
	"\nEmail: " . $phone;

	// Сообщение для почты



	// Отправка на почту

	$ok = mail('info@investae.com', 'Theme', $message_all); // mail('На какую почту отправлять', 'Тема сообщения', 'Сообщение'); 

	// Отправка на почту



	// Проверка отправки на почту

	if ($ok){
		echo 'Message sent!';
		sleep(2);
		header('Location: ' . $_SERVER['HTTP_REFERER']);
	}else{
		echo 'Fail(((';
	}

	// Проверка отправки на почту
 ?>