$(document).ready(function () {

    //MouseOver y MouseOut
    var caja = $('#caja');
    var datos = $('.datos');
    var circulo = $('#sigueme');
    
    /*     caja.mouseover(function () { 
            $(this).css('background', 'red');
         });

        caja.mouseout(function () {
            $(this).css('background', 'cyan');
        }); */



    function cambiaRojo() {
        $(this).css('background', 'red');
    }

    function cambiaCyan() {
        $(this).css('background', 'cyan');
    }

    //hover
    caja.hover(cambiaRojo, cambiaCyan);

    //dobleckick

    caja.dblclick(function () {
        $(this).css('background', 'violet');
    });

    //Focus y blur
    var nombre = $('#nombre');
    nombre.focus(function () {
        $(this).css('border', '2px solid green');
    });

    nombre.blur(function () {
        $(this).css('border', '1px solid #ccc');
        datos.text($(this).val()).show();
    });

    //Mousedown y mouseup
    datos.mousedown(function () {
        $(this).css('border-color', 'gray');
    });
    datos.mouseup(function () {
        $(this).css('border-color', 'black');
    });

    //Mousemove
    $(document).mousemove(function () {
        /* $('body').css('cursor', 'none'); */
        circulo.css('left', event.clientX -10);
        circulo.css('top', event.clientY -10);
    });

});