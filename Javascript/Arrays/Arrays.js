'use strict';

var arr = new Array(6);

for (var i = 0; i < 6; i++) {
    arr[i] =  parseInt(prompt('Please enter a num', 0));
}

/* console.log(arr);
document.write('<h1>' + arr + '</h1>'); */

/* document.write('<h1>' + arr.sort() + '</h1>'); */
/* document.write('<h1>' + arr.reverse() + '</h1>');

var cont = 0;
arr.forEach(element => {
    cont++;
}); */

/* document.write(cont);

function buscar(arr, num) {
    for (var i = 0; i < 6; i++) {
        arr[i] = parseInt(prompt('Please enter a num', 0));
    }
} */

/* function mostrar(elementos) {
    document.write('contenido del array');
    elementos.forEach(elemento => {
        document.write(elemento + '<br>');
    });
} */

var busqueda = parseInt(prompt('NUMERO A BUSCAR'));
var posicion = arr.findIndex(num => num == busqueda);

if (posicion != -1){
    document.write('Posicion de busqueda' + posicion);
}else {
    document.write('error');
}