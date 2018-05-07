<?php
require_once '../../jwt/src/BeforeValidException.php';
require_once '../../jwt/src/ExpiredException.php';
require_once '../../jwt/src/SignatureInvalidException.php';
require_once '../../jwt/src/JWT.php';
use \Firebase\JWT\JWT;

define('SECRET_KEY', "fakesecretkey");

  function tokengenerar($id) {

    $token = array();
    $token['Id'] = $id;
    $token['FechaHora'] = date("Y-m-d H:i:s");

    return JWT::encode($token, SECRET_KEY);
  }

  function tokenvalidar($token) {
    try{
      $tokenDecodificado= JWT::decode($token, SECRET_KEY, ['HS256']);
      return $tokenDecodificado->Id;

    } catch(Exception $e) {
      echo json_encode(array($token, $e->getMessage()));
      return 0;
    }    
    
  }
?>
