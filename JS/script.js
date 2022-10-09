
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const btnCalcular = document.getElementById("calcular")
 function validar(){
    var form = document.form;
    if (form.nombre.value=0){
        alert("El calculo es incorrecto")
    return false;
    }
 }