var button = document.getElementById("form-button");
button.addEventListener("click", function(){
// Interrupción para que el navegador depure.
//debugger;
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var misiones = {
        "mision1": document.getElementById("tipo_mision_1"),
        "mision2": document.getElementById("tipo_mision_2"),
        "mision3": document.getElementById("tipo_mision_3"),
        "mision4": document.getElementById("tipo_mision_4")
    }
    var ejercito = document.getElementById("ejercito");
    var fecha = document.getElementById("fecha");
    
    if (nombre.checkValidity() == false){
        alert("El campo nombre es incorrecto");
        nombre.focus();
        return false;
    }

    if (email.checkValidity() == false){
        if (email.validity.patterMismatch){
            alert("Casi parece un email");
        }
        if (email.validity.typeMismatch){
            alert("Introduce un email válido");
        }                
        if (email.validity.valueMissing){
            alert("El email es obligatorio");
        }
        email.focus();
        return false;
    }

    if (ejercito.checkValidity() == false){
        alert("El campo ejercito es incorrecto");
        ejercito.focus();
        return false;
    }

    if (fecha.checkValidity() == false){
        alert("El campo fecha es incorrecto");   
        fecha.focus();     
        return false;
    }

    if(misiones.mision1.checkValidity()==false){
        alert("Selecciona el tipo de misión");        
        return false;
    }


});