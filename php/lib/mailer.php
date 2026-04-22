<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

/**
 * @param array<string,mixed> $config
 */
function bb_create_mailer(array $config): PHPMailer
{
    $mail = new PHPMailer(true);
    $smtp = $config['smtp'] ?? [];

    $mail->isSMTP();
    $mail->Host       = (string)($smtp['host'] ?? '');
    $mail->Port       = (int)($smtp['port'] ?? 587);
    $mail->SMTPAuth   = true;
    $mail->Username   = (string)($smtp['username'] ?? '');
    $mail->Password   = (string)($smtp['password'] ?? '');

    $encryption = (string)($smtp['encryption'] ?? 'tls');
    if ($encryption === 'ssl') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    }

    // Reasonable defaults for shared hosting
    $mail->SMTPAutoTLS = true;
    $mail->CharSet = 'UTF-8';

    // Disable verbose output in production. Use SMTP::DEBUG_SERVER temporarily if needed.
    $mail->SMTPDebug = SMTP::DEBUG_OFF;

    $fromEmail = (string)($smtp['from_email'] ?? $smtp['username'] ?? '');
    $fromName  = (string)($smtp['from_name'] ?? ($config['company_name'] ?? ''));

    $mail->setFrom($fromEmail, $fromName);

    if (!empty($smtp['reply_to_email'])) {
        $mail->addReplyTo((string)$smtp['reply_to_email'], (string)($smtp['reply_to_name'] ?? $fromName));
    }

    $mail->isHTML(true);

    return $mail;
}

