<?php
// Conexión a la base de datos
$servername = "127.0.0.1";
$username = "root";
$password = "1234";
$database = "prueba_llanoexpress";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

// Insertar datos en la base de datos
$sql = "INSERT INTO contactos (nombre, email, telefono, mensaje) VALUES ('$nombre', '$email', '$telefono', '$mensaje')";

if ($conn->query($sql) === TRUE) {
    echo "Datos almacenados correctamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>