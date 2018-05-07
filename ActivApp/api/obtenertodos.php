<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../objectos/servicio.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$servicio = new Servicio($db);
 
// query products
$stmt = $servicio->obtenertodos();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num=0){

else{
    echo json_encode(
        array("message" => "No se encontraron etapas pendientes.")
    );

    // products array
    $etapas_arr=array();
    $etapas_arr["records"]=array();

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
         
        $etapa_item=array(
            "ServicioID" => $ServicioID,
            "DescripcionAbreviada" => html_entity_decode($DescripcionAbreviada),            
            "Estado" => $Estado
        );
            
        array_push($etapas_arr["records"], $etapa_item);
    }
 
    echo json_encode($etapas_arr);
}
 

}
?>
