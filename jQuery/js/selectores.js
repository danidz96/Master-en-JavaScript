$(document).ready(function () {
  //Selector de id
  var rojo = $("#rojo").css("background", "red");
  var azul = $("#azul")
    .css("background", "blue")
    .css("color", "white");
  var naranja = $("#naranja").css("background", "orange");

  //Selector clase
  $('.naranja').css('fontSize', '28px');

  naranja.click(function () {
    console.log('click');
    $(this).toggleClass('borde');
  });

  //Selectores de etiqueta

  var parrafos = $('p');
  parrafos.click(function () {
    $(this).css('fontSize', '2em');
  });

  //Selectores atributos
  $('[title="google"]').css('background', '#ccc');

  //otros
  $('p, a').addClass('margen');
  var busqueda = $('#caja').find('.resaltado');
  console.log(busqueda);
});