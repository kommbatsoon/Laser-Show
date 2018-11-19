<?php

$recepient = "Pashok-0@yandex.by";
$sitename = "Laser-Show";

$phone = trim($_POST["phone"]);
$message = "Телефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");