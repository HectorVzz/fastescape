<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Fast Escape</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/business-frontpage.css" rel="stylesheet">

    <script src="vendor/jquery/jquery.min.js"></script>

    <script src="js/funciones.js"></script>

    <script type="text/javascript" src="js/libs/three/three.js"></script>

	  <script type="text/javascript" src="js/libs/three/three.js"></script>
	
  
 



  </head>

  <body>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Fast Escape</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>

    <!-- Div donde se insertera el canvas para el juego. -->

    <button id="jugar">Iniciar Juego</button>
          
          <div id="scene-section"  >
          </div>
        

  

    <!-- Page Content -->
    <div class="container">

      <div class="row">
        <div class="col-sm-8">

          <button class="btn btn-primary controles" id="pausa">Pausar</button> 

          <button class="btn btn-primary controles" id="reinicio">reiniciar</button> 

          <button  class="btn btn-primary controles " id="hider">opciones</button> 

        


         <br>
         <div>

       
         <div class="dropdown show opcion" id="resolucion">
            <a class="btn btn-secondary dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Resolucion
            </a>
          
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" id="resolucion1" href="javascript:void(0)">1300 x 700</a>
              <a class="dropdown-item" id="resolucion2" href="#">800 x 600</a>
              <a class="dropdown-item" id="resolucion3" href="#">600 x 400</a>
            </div>
          </div>

          <div class="opcion">
            <div>Sonido</div>
            <div class="slidecontainer opcion">
              <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
            </div>
        </div>
      </div>

        </div>
     

        
      </div>

      <div class="row">
        <div class="col-sm-8">
          <h2 class="mt-4">Fast Escape</h2>
          <p>El juego consiste de un nivel, cuentas con un límite de 
            tiempo para poder terminar el nivel con el menor tiempo  y mayor score posible. 
            El jugador controlara una nave donde los controles serán estilo tanque, es decir,
            el jugador al presionar las teclas W o S harán que la nave se mueva hacia delante o hacia atrás,
            y al presionar la tecla A o D se girara la nave. Al presionar las teclas Q o E, el jugador se moverá horizontalmente.
            Con la barra espaciadora se realizará un disparo para destruir naves enemigas que apareceran a medida que se desarrolla el juego. </p>
          
        </div>
        <div class="col-sm-4">
          <h2 class="mt-4">Compartir</h2>
          <a href="https://www.facebook.com">
            <img src="img/facebook-logo.png" height="150px" width="150px" alt="FacebookLogo">
          </a>
        </div>
      </div>
      <!-- /.row -->

      <div class="row">
        
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Lugar</th>
              <th scope="col">Nombre</th>
              <th scope="col">Puntuacion</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Hector</td>
              <td>10000</td>
           
            </tr>
        
          </tbody>
        </table>

      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->

    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
      </div>
      <!-- /.container -->
    </footer>

    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  </body>
<script>
function myFunction() {
  alert("You pressed a key inside the input field");
}</script>
</html>
