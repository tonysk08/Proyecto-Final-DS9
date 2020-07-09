function validar () {
    var nombre, apellido, cedula, fecha, correo, phone, cel, pass, rpass, expresion, exp_phone, exp_p;

    nombre=document.getElementById("name").value;
    apellido=document.getElementById("lastname").value;
    cedula=document.getElementById("cedula").value;
    fecha=document.getElementById("fecha").value;
    correo=document.getElementById("email").value;
    phone=document.getElementById("telefono").value;
    cel=document.getElementById("celular").value;
    pass=document.getElementById("password").value;
    rpass=document.getElementById("rpassword").value;

    expresion=/\w+@\w+\.+[a-z]/;
    //exp_phone=;
    //exp_p;

    if (nombre===""||apellido===""||cedula===""||fecha===""||correo===""||pass===""||rpass==="")
    {
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length>30)
    {
        alert("El nombre es muy extenso");
        return false;
    }
    else if (apellido.length>80)
    {
        alert("El apellido es muy extenso");
        return false;
    }
    else if (correo.length>100)
    {
        alert("El correo es muy extenso");
        return false;
    }
    else if (!expresion.test(correo))
    {
        alert("El correo no es válido");
        return false;
    }
    else if (pass.length<8)
    {
        alert("La contraseña debe tener un mínimo de 8 caracteres");
        return false;
    }
    else if (rpass!=pass)
    {
        alert("La contraseña no coincide");
        return false;
    }

    else if (phone.length!=7)
    {
        alert("El teléfono ingresado no es válido");
        return false;
    }
    else if (isNaN(phone))
    {
        alert("El teléfono ingresado no es un número");
        return false;
    }

    else if (cel.length!=8)
    {
        alert("El celular ingresado no es válido");
        return false;
    }
    else if (isNaN(cel))
    {
        alert("El celular ingresado no es un número");
        return false;
    }
}