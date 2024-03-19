function cancelar(){
    window.location.href = "login.html";
}

function Validar(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;   
    var estrato = document.getElementById("estrato").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    alert("Nombre: " + nombre + " Apellido: " + apellido);
    alert("Email: " + email + " Telefono: " + telefono);
    alert("estrato: " + estrato + " fecha de nacimiento: " + fechaNacimiento)
}
