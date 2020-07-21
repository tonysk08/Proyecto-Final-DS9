//falta incluir el archivo que contenga la conexion a la BD

var correo, pass;

correo=document.getElementById("email").value;
pass=document.getElementById("password").value;

consulta=("SELECT userMail, UsersSecret FROM users_secret WHERE userMail ='correo'");

/*La busqueda en la base de datos se realizo de este modo para evitar las inyecciones sql*/
query=("userMail, UsersSecret FROM users_secret"
+"WHERE userMail='".mysql_real_escape_string(correo)
+"'and "+ "UsersSecret='".mysql_real_escape_string(pass)+"'");

rs= mysql_query(query);
row=mysql_fetch_object(rs);
nr = mysql_num_rows(rs);

if(nr == 1){
    alert("No ingreso");
    }
    else if(nr == 0) {
         header("Location:");//aqui va el archivo una vez la sesion este iniciada
    }