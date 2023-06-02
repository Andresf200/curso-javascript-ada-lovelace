window.onload = iniciar;

function iniciar(){ 
    document.getElementById("enviar").addEventListener("click",validar,false);
}

function validarNombre(){
    var elemento = document.getElementById("nombre");
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento, "El campo nombre debe contener un nombre");
        }
        if(elemento.validity.patternMismatch){
            error2(elemento, "El nombre  debe tener entre 2 y 15 caracteres");
        }
        //error(elemento);
        return false;
    }
    return true;
}

function validarEdad(){
    var elemento = document.getElementById("edad");
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
           error2(elemento, "Debe introducir la edad");
        }
        if(elemento.validity.rangeOverflow){
            error2(elemento, "El valor debe ser menor de 100");
        }
        if(elemento.validity.rangeUnderflow){
            error2(elemento,"El valor de debe ser mayor o igual a 18");
        }
        //error(elemento);
        return false;
    }
    return true;
}

function validarTelefono(){
    var elemento = document.getElementById("telefono");
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
           error2(elemento, "Debe introducir la edad");
        }
        if(elemento.validity.patternMismatch){
           error2(elemento, "El telefono debe tener 9 numeros");
        }
       // error(elemento);
        return false;
    }
    return true;
}

function validar(e){
    borrarError();
    if(validarNombre() && validarEdad() && validarTelefono() && 
    confirm("Pulsa aceptar si desea enviar el formulario")){
        return true;
    }else{
        e.preventDefault();
        return false;
    }
}

function error(elemento){
    document.getElementById("MensajeError").innerHTML 
    = elemento.validationMessage;
    elemento.className = "error";
    elemento.focus();
}

function error2(elemento,mensaje){
    document.getElementById("MensajeError").innerHTML 
    = mensaje;
    elemento.className = "error";
    elemento.focus();
}

function borrarError(){
    var formulario = document.forms[0];
    
    for(var i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}