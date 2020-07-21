function validar () {
    var nombre, apellido, cedula, fecha, correo, phone, cel, pass, rpass, exp_correo, exp_phone, exp_cel, exp_p;

    nombre=document.getElementById("name").value;
    apellido=document.getElementById("lastname").value;
    cedula=document.getElementById("cedula").value;
    fecha=document.getElementById("fecha").value;
    correo=document.getElementById("email").value;
    phone=document.getElementById("telefono").value;
    cel=document.getElementById("celular").value;
    pass=document.getElementById("password").value;
    rpass=document.getElementById("rpassword").value;

    exp_correo=/\w+@\w+\.+[a-z]/; //expresion regular para controlar el formato del correo
    exp_phone=/^\d{3}-\d{4}$/; //000-0000 expresion regular para predeterminar este formato al numero ingresado
    exp_cel=/^\d{4}-\d{4}$/; //0000-0000 expresion regular para predeterminar este formato al numero ingresado
    exp_p=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/; //expresion regular para controlar el formato de la contraseña
    /*  Mínimo 8 caracteres
        Máximo 15 caracteres
        Al menos una letra mayúscula
        Al menos una letra minúscula
        Al menos un dígito
        No espacios en blanco
        Al menos 1 caracter especial */

    if (nombre===""||apellido===""||cedula===""||fecha===""||correo===""||pass===""||rpass==="")
    {
        alert("Todos los campos son obligatorios, en caso de celular y teléfono debe llenar al menos uno.");
        return false;
    }

    else if (nombre.length>50)
    {
        alert("El nombre es muy extenso");
        return false;
    }

    else if (apellido.length>50)
    {
        alert("El apellido es muy extenso");
        return false;
    }

    else if (correo.length>50)
    {
        alert("El correo es muy extenso");
        return false;
    }

    else if (!exp_correo.test(correo))
    {
        alert("El formato de correo no es válido");
        return false;
    }

    else if (phone===""&&cel==="")
    {
        alert("No puede dejar los campos de Teléfono y Celular vacíos, debe llenar al menos uno.");
        return false;
    }

    else if (phone!="" && !exp_phone.test(phone))
    {
        alert("El formato de teléfono ingresado no es válido");
        return false;
    }

    else if (cel!="" && !exp_cel.test(cel))
    {
        alert("El formato de celular ingresado no es válido");
        return false;
    }

    else if (pass.length<8)
    {
        alert("La contraseña debe tener un mínimo de 8 caracteres");
        return false;
    }

    else if (!exp_p.test(pass))
    {
        alert("El formato de contraseña no es válido");
        return false;
    }

    else if (rpass!=pass)
    {
        alert("Las contraseñas no coinciden");
        return false;
    }
    
}