$(document).ready(function(){
   
//$('body').css('background-color','red');

//Variable usara para saber que el usuario quiere ver las opciones.
var mostrado = false;

//Variable usada para saber si el usuario quiere pausar.
var pausado = false;


//////////////////////////////
//Boton de opciones
$( "#hider" ).click(function() {

  if(mostrado){

        $( ".opcion" ).hide( "fast", function() {

          // Use arguments.callee so we don't need a named function
          $( this ).prev().hide( "fast", arguments.callee );
          mostrado = false;
          $("#hider").css("background-color","rgb(0, 105, 217)");
        });
      
     }

    else
    {
      $( ".opcion" ).show( 200 );
      mostrado= true;

      $("#hider").css("background-color","#002660");
    }
  });
////////////////////////////////

//////////////////////////////////////
//Boton de pausa
$( "#pausa" ).click(function() {
if(pausado==false)
{
  $("#pausa").text("Resumir");

  pausado = true;
}
else
{
  $("#pausa").text("Pausar");
pausado= false;
}
});
/////////////////////////////

//  confirm("¿Seguro que deseas reiniciar?")
$( "#reinicio" ).click(function() {
  
  confirm("¿Seguro que deseas reiniciar?")
  });


});