window.addEventListener('load', function () {
    var dashed= document.querySelector('.dashed');
    dashed.style.display = 'none';
    var formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', function () {
        console.log('click');


    var nombre = document.querySelector('#nombre').value;
    var apellido = document.querySelector('#apellido').value;
    var edad = document.querySelector('#edad').value;

/*     function validar(campo) {
        if(campo.trim() === null || campo.trim().length <= 0){
            alert('error');
            return false;
        } else {
            return true;
        }
    } */

    if (nombre.trim() === null || nombre.trim().length <= 0) {
        document.querySelector("#nombre").classList.add("error");
        return false;
    } else {
        document.querySelector("#nombre").classList.remove("error");
    }
    if (apellido.trim() === null || apellido.trim().length <= 0) {
        document.querySelector("#apellido").classList.add("error");
        return false;
    } else {
        document.querySelector("#apellido").classList.remove("error");
    }
    if (edad === null || edad <= 0 ) {
        document.querySelector("#edad").classList.add("error");
        return false;
    } else {
        document.querySelector("#edad").classList.remove("error");
    }
    
    dashed.style.display = 'block';

    var arr = [nombre, apellido, edad];

    arr.forEach(element => {
        var p = document.createElement('p');
        p.append(element);
        dashed.append(p);
    });

    });
});