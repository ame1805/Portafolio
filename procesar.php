<?php
// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $nombre = filter_input(INPUT_POST, 'nombre', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $asunto = filter_input(INPUT_POST, 'asunto', FILTER_SANITIZE_STRING);
    $mensaje = filter_input(INPUT_POST, 'mensaje', FILTER_SANITIZE_STRING);
    
    // Validar los datos
    $errores = [];
    
    if (empty($nombre)) {
        $errores[] = "El nombre es obligatorio";
    }
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errores[] = "Email inválido";
    }
    
    if (empty($asunto)) {
        $errores[] = "El asunto es obligatorio";
    }
    
    if (empty($mensaje)) {
        $errores[] = "El mensaje es obligatorio";
    }
    
    // Si no hay errores, procesar el formulario
    if (empty($errores)) {
        // Configurar el destinatario del correo
        $destinatario = "tu@email.com"; // Cambia esto por tu email real
        
        // Configurar las cabeceras del correo
        $cabeceras = "From: $nombre <$email>" . "\r\n";
        $cabeceras .= "Reply-To: $email" . "\r\n";
        $cabeceras .= "X-Mailer: PHP/" . phpversion();
        
        // Intentar enviar el correo
        if (mail($destinatario, $asunto, $mensaje, $cabeceras)) {
            // Éxito
            $respuesta = [
                'exito' => true,
                'mensaje' => '¡Mensaje enviado con éxito! Te responderé lo antes posible.'
            ];
        } else {
            // Error al enviar
            $respuesta = [
                'exito' => false,
                'mensaje' => 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
            ];
        }
    } else {
        // Hay errores de validación
        $respuesta = [
            'exito' => false,
            'mensaje' => 'Por favor, corrige los siguientes errores: ' . implode(', ', $errores)
        ];
    }
    
    // Devolver la respuesta como JSON si es una petición AJAX
    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-Type: application/json');
        echo json_encode($respuesta);
        exit;
    } else {
        // Si no es AJAX, redirigir con un mensaje
        if ($respuesta['exito']) {
            header('Location: index.html?mensaje=enviado');
        } else {
            header('Location: index.html?mensaje=error');
        }
        exit;
    }
} else {
    // Si alguien intenta acceder directamente a este archivo
    header('Location: index.html');
    exit;
}
?>
