$(document).ready(function () {
    //LOAD
    /* $('#datos').load('https://reqres.in/'); */

    //Get y Post
    $.get('https://reqres.in/api/users', {page: 3}, function (res) {
        res.data.forEach((element, index) => {
            $('#datos').append('<p>' + element.first_name + ' ' + element.last_name + '</p>');
        });
    });


    


    $('#formulario').submit(function (e) {
        e.preventDefault();
        var usuario = {
            name: $('input[name="name"]').val(),
            email: $('input[name="email"]').val()
        };
        /* $.post($(this).attr('action'), usuario, function (res) {
            console.log(res);
        }).done(function () {
            alert('Usuario añadido correctamente');
        }); */

        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: usuario,
            beforeSend: function () {
                console.log('Enviando usuario ...');
            },
            success: function (res) {
                console.log(res);
            },
            error: function () {
                console.log('Ha ocurrido un error');
            },
            timeout: 5000
        });
    });
});