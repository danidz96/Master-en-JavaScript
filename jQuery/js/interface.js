$(document).ready(function () {

    //Mover elemento por la pagina
    $('.elemento').draggable();
    //Redimensionar
    $('.elemento').resizable();

    //Selecionar elementos  
    /* $('.lista-seleccionable').selectable(); */
    $('.lista-seleccionable').sortable({
        update: function (event, ui) {
            console.log('ha cambiado la lista');
        }
    });

    //Drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function () {
            console.log('has soltado algo dentro');
        }
    });

    //Efectos

    $('#mostrar').click(function () {
        $('.caja-efectos').toggle('shake', 2000);
    });

    //Tooltip
    /* $(document).tooltip(); */

    //Dialog
    $('#activar-popup').click(function () {
    $('#popup').dialog();
    });

    //Datepicker
    $('#calendario').datepicker();

    //Tabs
    $('#tabs').tabs();
    
});