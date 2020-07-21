//falta incluir el archivo que contenga la conexion a la BD

var nombre, apellido, cedula, fecha, correo, cel, phone, pass;

    nombre=document.getElementById("name").value;
    apellido=document.getElementById("lastname").value;
    cedula=document.getElementById("cedula").value;
    fecha=document.getElementById("fecha").value;
    correo=document.getElementById("email").value;
    phone=document.getElementById("telefono").value;
    cel=document.getElementById("celular").value;

    pass=document.getElementById("password").value;

//consulta para insertar estos campos a la tabla users
insertar= "INSERT INTO users(nombre, apellido, cedula, email, celular, telefono, fechaNacimiento) VALUES ('nombre','apellido', 'cedula', 'correo', 'cel', 'phone', 'fecha')";

//consulta para insertar este campo a la tabla users_secret
insertarc= "INSERT INTO users_secret(UsersSecret) VALUES ('pass')";

//verifica que el correo no esté registrado
verificar_correo=mysqli_query(conexion, "SELECT * FROM users WHERE email ='correo'");
if (nysqli_num_rows(verificar_usuario)>0)
{
    alert("Ya existe un usuario con este correo");
    window.history.go(-1); //regresa a la ventana anterior en caso de salir la alerta por infracción
    return;
    //close; aqui debe salir porque sino lo registra duplicado sin importar el if
}

verificar_cedula=mysqli_query(conexion, "SELECT * FROM users WHERE cedula ='cedula'");
if (nysqli_num_rows(verificar_cedula)>0)
{
    alert("Ya existe un usuario con esta cédula");
    window.history.go(-1); //regresa a la ventana anterior en caso de salir la alerta por infracción
    return;
    //close; aqui debe salir porque sino lo registra duplicado sin importar el if
}

verificar_celular=mysqli_query(conexion, "SELECT * FROM users WHERE celular ='cel'");
if (nysqli_num_rows(verificar_celular)>0)
{
    alert("Ya existe un usuario con este celular");
    window.history.go(-1); //regresa a la ventana anterior en caso de salir la alerta por infracción
    return;
    //close; aqui debe salir porque sino lo registra duplicado sin importar el if
}

//ejecutar consulta
resultado=mysqli_query(conexion, insertar, insertarc);

if(!resultado)
{
    alert("ERROR al registarse");
    window.history.go(-1); //regresa a la ventana anterior en caso de salir la alerta por infracción
}
else
{
    alert("Usuario registrado exitosamente");
}

//Cerrar la conexion
mysqli_close(conexion);