$(document).ready(function () {
    var caja = $('#caja');
    $('#mostrar').hide();
    $('#mostrar').click(function () {
        $(this).hide();
        $('#ocultar').show();
        caja.fadeIn('normal');
    });
    $('#ocultar').click(function () {
        $(this).hide();
        $('#mostrar').show();
        caja.fadeOut('fast', function () {
            console.log('elemento ocultado');
        });
    });

    $('#todoenuno').click(function () {
        caja.fadeToggle('fast');
    });

    $('#animar').click(function () {
        caja.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '110px'
            }, 'slow')
        .animate({
            borderRadius: '900px',
            marginTop: '80px'
        }, 'slow')
        .animate({
            borderRadius: '0px',
            marginLeft: '0px'
        }, 'slow')
        .animate({
            borderRadius: '100px',
            marginTop: '0px'
        }, 'slow')
        .animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '110px'
        }, 'slow');
    });
});