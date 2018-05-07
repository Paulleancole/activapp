<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../objectos/usuario.php';
include_once '../objectos/token.php';

  //Leo los parametros
  if ($_POST) {
    $usuario= $_POST["u"];
    $password=$_POST["p"];
  } 

  //Valido los datos ingresados
  if ($usuario=='' || $password==''){
    http_response_code(200);
    echo json_encode(array("message" => "Usuario y/o clave vacias."));
    return 0;
  }

  // instantiate database and product object
  $database = new Database();
  $db = $database->getConnection();

  //Valido que se haya abierto la BD
  if (!$db){
    http_response_code(500);
    echo json_encode(array("message" => "Error de base de datos."));
  }

  // initialize object
  $login = new Usuario($db);

  // query products
  $stmt = $login->validar($usuario, $password);
  $num = $stmt->rowCount();

  // check if more than 0 record found
  if($num==0){
    //Error
    http_response_code(200);
    echo json_encode(array("message" => "Usuario y clave invalidos."));  
  }
  else{
     // login array   
      $usuario_arr=array();
      $usuario_arr["usuario"]=array();    

      // retrieve our table contents    
      $row = $stmt->fetch(PDO::FETCH_ASSOC);

      // extract row        
      extract($row);
  
      $usuario_item=array(            
          "usuarioID" => $UsuarioID,
          "alias" => html_entity_decode($Alias),
          "token"  => tokengenerar($UsuarioID)
      );
              
      //Ok
      http_response_code(200);          
      echo json_encode($usuario_item);
  
  }

?>
