$(document).ready(function(){
   

  
	var scene; 
	//La escena va a contener a todos los objetos que aparezcan en la pantalla, todo lo que quieras que aparezca , va en la escena.
	var camera;
	//
	var renderer;
	//Todos los objetos que esten en la escena , los va a dibujar el renderer.

  //Deltatime nos ayuda a poder actualizar el juego en segundos reales y no a la velocidad del cpu.
	var deltaTime;

	var clock;

//$('body').css('background-color','red');

//Variable usara para saber que el usuario quiere ver las opciones.
var mostrado = false;

//Variable usada para saber si el usuario quiere pausar.
var pausado = true;

//////////////////////////
//Boton de jugar

$("#jugar").click(function()
{
  pausar();

  $(".controles").css("display","inline-block");
  $("#scene-section").css("margin-bottom","0%");
  $("#scene-section").append(renderer.domElement);
  $("#jugar").css("display","none");

});
////////////////////////

//////////////////////////////
//Boton de opciones
$( "#hider" ).click(function() {

  if(mostrado){

        $( ".opcion" ).hide( "fast", function() {

          // Use arguments.callee so we don't need a named function
          $( this ).prev().hide( "fast", arguments.callee );
          mostrado = false;
          $("#hider").css("background-color","#007bff");
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


function pausar()
{
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
}

$( "#pausa" ).click(function() {
  
pausar();
});


/////////////////////////////

//  confirm("¿Seguro que deseas reiniciar?")

function reinicio()
{
  confirm("¿Seguro que deseas reiniciar?")
}

$( "#reinicio" ).click(function() {
  
 reinicio();
  });
/////////////////////////////////////

//Cambio de resolucion
///////////////////////////////

function cambiarresolucion(ancho,alto)
{

  anchoventana = ancho;
  alturaventana = alto;

  renderer.setPixelRatio(anchoventana / alturaventana);
  renderer.setSize(anchoventana, alturaventana);
  renderer.render(scene, camera);
 
}

$( "#resolucion1" ).click(function() {

    $("#scene-section").css("margin-left","8%");
  
    cambiarresolucion(1320,700);

  });

  $( "#resolucion2" ).click(function() {

    $("#scene-section").css("margin-left","25%");
  
    cambiarresolucion(800,600);
  
    });

  $( "#resolucion3" ).click(function() {

    $("#scene-section").css("margin-left","30%");
  
      cambiarresolucion(600,400);
    
   });


//////////////////////////
///////////////////////////////////////////////////////////////
  //Empieza el threegl
    
  clock = new THREE.Clock();
    

  var anchoventana = 800;
  var alturaventana = 600;

  var visibleSize = { width: anchoventana, height: alturaventana};
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, visibleSize.width / visibleSize.height, 0.1, 100);
  //Los parametros de la camara son , fod, relacion de aspecto y que tan lejos se renderea un modelo.

  camera.position.z = 2;
  //Todas las variables de threejs tienen la porpiedad de position , la cual contiene x y  z

  renderer = new THREE.WebGLRenderer( {precision: "mediump" } );
  renderer.setClearColor(new THREE.Color(0.5, 0.5, 0.5));
  //Forma de poner color.
  renderer.setPixelRatio(visibleSize.width / visibleSize.height);
  renderer.setSize(anchoventana, alturaventana);

  var ambientLight = new THREE.AmbientLight(new THREE.Color(1, 1, 1), 0.8);
                              //Color 	//Intensidad de luz
  //Todo lo que quieras que aparezca en el reder debe agregarse a la escena
  //incluyendo las luces.

  scene.add(ambientLight);

  var directionalLight = new THREE.DirectionalLight(new THREE.Color(.3, .1, .3), 0.4);
  directionalLight.position.set(0.4, 0, 1);	
  var directionalLight2 = directionalLight.clone();
  directionalLight2.position.set(-0.4, 0, 1);
  scene.add(directionalLight);
  scene.add(directionalLight2);

  //Se agrega el canvas al HTML.
//  $("#scene-section").append(renderer.domElement);


  
  //geometria , material y malla

////////////////////////////////////////////////////////////////////////
//Creacion de un cubo
  var geometry = new THREE.BoxGeometry(1,1,1);
  //geometria
  var material = new THREE.MeshPhongMaterial({
  //MeshBasicMaterial
  //MeshLambertMaterial
  //MeshPhongMaterial
    color: new THREE.Color(0.6,0.2,0.2),
    specular: new THREE.Color(1.0,1.0,1.0),
    shininess: 500 

  });
  //Material

  var cube1 = new THREE.Mesh(geometry,material);

  cube1.position.z = -2;
  //Malla


  var cube2 = cube1.clone();

  cube2.position.x = 2;

  cube1 = new THREE.Object3D();
  cube1.position.z = -2;
  cube1.name = 'cube1';
  
  cube2.name = 'cube2';

  scene.add(cube1);
  cube1.add(cube2);
////////////////////////////////////////////////////////////////////////////



  render();

	function render() {
    if(pausado==false)
    {
  

		deltaTime = clock.getDelta();

		var cube1 = scene.getObjectByName('cube1');

		var cube2 = scene.getObjectByName('cube2');

		cube1.rotation.y += THREE.Math.degToRad(90 * deltaTime);
		cube2.rotation.y -=  THREE.Math.degToRad(180 * deltaTime);

		//Tiempo delta es cuanto tardo un frame de dibujarse de uno a otro.
    renderer.render(scene, camera);
    }
    else
    {
    clock.stop();
    }
    requestAnimationFrame(render);

  }
  //Termina three gl
  //////////////////////////////////////////////////////////


/////////////////////////////////////
//Inicia eventos de teclado
  $('body').keydown (function(event) {
    if(event.keyCode == 80)
    {
      
      pausar();
    }
  
    if(event.keyCode == 82)
    {
      debugger
      reinicio();
    }
   // alert(event.keyCode);
  });
  //Termina eventos de teclado
  //////////////////////////////////

});