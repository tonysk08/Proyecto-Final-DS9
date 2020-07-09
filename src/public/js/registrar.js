//falta incluir el archivo que contenga la conexion a la BD

//revisar si las declaraciones coinciden con los nombres de los campos en la BD

var nombre, apellido, cedula, fecha, correo, phone, pass, rpass;

    nombre=document.getElementById("name").value;
    apellido=document.getElementById("lastname").value;
    cedula=document.getElementById("cedula").value;
    fecha=document.getElementById("fecha").value;
    correo=document.getElementById("email").value;
    phone=document.getElementById("telefono").value;
    cel=document.getElementById("celular").value;
    pass=document.getElementById("password").value;
    rpass=document.getElementById("rpassword").value;

//consulta para insertar
insertar= "INSERT INTO usuarios(nombre, apellido, cedula, fecha, correo, phone, celular, pass, rpass) VALUES ('nombre','apellido', 'cedula', 'fecha', 'correo', 'phone', 'celular', 'pass', 'rpass')";

//verifica que el correo no esté registrado
verificar_correo=mysqli_query(conexion, "SELECT * FROM usuarios WHERE correo ='correo'");
if (nysqli_num_rows(verificar_usuario)>0)
{
    alert("Ya existe un usuario con este correo");
    window.history.go(-1); //regresa a la ventana anterior en caso de salir la alerta por infracción
    close; //aqui debe salir porque sino lo registra duplicado sin importar el if, puse close pero en el video que vi usaban exit porque estaba en php
}
verificar_cedula=mysqli_query(conexion, "SELECT * FROM usuarios WHERE cedula ='cedula'");
if (nysqli_num_rows(verificar_cedula)>0)
{
    alert("Ya existe un usuario con esta cédula");
    window.history.go(-1); //regresa a la ventana anterior en caso de salir la alerta por infracción
    close; //aqui debe salir porque sino lo registra duplicado sin importar el if, puse close pero en el video que vi usaban exit porque estaba en php
}

verificar_celular=mysqli_query(conexion, "SELECT * FROM usuarios WHERE celular ='celular'");
if (nysqli_num_rows(verificar_celular)>0)
{
    alert("Ya existe un usuario con este celular");
    window.history.go(-1); //regresa a la ventana anterior en caso de salir la alerta por infracción
    close; //aqui debe salir porque sino lo registra duplicado sin importar el if, puse close pero en el video que vi usaban exit porque estaba en php
}

//ejecutar consulta
resultado=mysqli_query(conexion, insertar);

if(!resultado)
{
    alert("ERROR al registarse");
}
else
{
    alert("Usuario registrado exitosamente");
    window.history.go(-1); //regresa a la ventana anterior en caso de salir la alerta por infracción
}

//Cerrar la conexion
mysqli_close(conexion);