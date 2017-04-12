$(document).ready(function () {
  // TODO: Keydown para los botones
  var contenedor1 ="";

  function operaciones(){
      contenedor1 = eval(contenedor1)
  }

  $("a").on("click", function () {
    if ($(this).html() == "C") {
      contenedor1 = "";
      $("input").val("0");
    }
    else if($(this).html() == "="){
      operaciones(contenedor1);
      $("input").val(contenedor1);
    }
    else if ($(this).html() !== "=") {
      contenedor1 += $(this).html();
      console.log(contenedor1);
      $("input").val(contenedor1);
    }
  });
});
