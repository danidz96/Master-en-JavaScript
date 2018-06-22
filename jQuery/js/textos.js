$(document).ready(function () {

    reloadLinks();

    $('#add_button').click(function () {
        $('#menu').append('<li><a href="' + $('#add_link').val() + '"></a></li>');
        reloadLinks();
    });

    

});

function reloadLinks() {
    $('a').each(function (index) {
        var that = $(this);
        var enlace = ($(this).attr('href'));
        that.text(enlace);
    });
}