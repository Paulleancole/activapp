<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../objetos/acciones.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object 
$accion = new acciones($db);

// Array de respuesta
$respuesta_arr=array();
$respuesta_arr["acciones"]=array();
$respuesta_arr["puntos"]=array();
$respuesta_arr["ranking"]=array();
$respuesta_arr["eventos"]=array();
$respuesta_arr["frase"]=array();

// query acciones
$stmt = $accion->obtenerDetallePuntos($idUsuario,3);
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
    // retrieve our table contents    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        // extract row        
        extract($row);
        
        $actividad_item=array(
            "fechaAccion" => $fechaAccion,
            "nombreAccion" => html_entity_decode($nombreAccion),
            "idSticker" => $idSticker,
            "puntos" => $puntos
        );
            
        array_push($respuesta_arr["acciones"], $actividad_item);
    }




    // query ranking
$stmt = $accion->obtenerDetallePuntos($idUsuario,3);
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
    // retrieve our table contents    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        // extract row        
        extract($row);
        
        $actividad_item=array(
            "fechaAccion" => $fechaAccion,
            "nombreAccion" => html_entity_decode($nombreAccion),
            "idSticker" => $idSticker,
            "puntos" => $puntos
        );
            
        array_push($respuesta_arr["ranking"], $actividad_item);
    }





    //Todo OK
    http_response_code(200);
    echo json_encode($respuesta_arr);
}

?>
