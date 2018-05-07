<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../objetos/actividades.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$actividad = new actividad($db);
 
// query products
$stmt = $actividad->obtenerResumenActividades(1);
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){

    // products array
    $respuesta_arr=array();
    $respuesta_arr["records"]=array();

    // retrieve our table contents    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        // extract row        
        extract($row);
        
        $actividad_item=array(
            "idActividad" => $idActividad,
            "nombreActividad" => html_entity_decode($nombreActividad),
            "idSticker" => $idSticker,
            "puntos" => $Puntos
        );
            
        array_push($respuesta_arr["records"], $actividad_item);
    }
    //Todo OK
    http_response_code(200);
    echo json_encode($respuesta_arr);
}

?>
