<?php
class acciones{
 
    // database connection and table name
    private $conn;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // Acciones
    function obtenerResumenAcciones($idUsuario,$idActividad){

        // select all query
     $query = "SELECT ACT.`idActividad`, ACC.`idAccion`, ACC.`nombreAccion`, ACC.`idSticker`, ACC.`puntos`, 	
	                SUM(IF(UA.`idAccion` IS NULL, 0,ACC.`puntos`)) AS Puntos, ACC.`fechaAccion`
                FROM usuarios U
                LEFT JOIN acciones ACC
	                ON ACC.idUnidadGestion = U.idUnidadGestion
	        LEFT JOIN actividades ACT
	                ON ACT.idActividad = ACC.idActividad
                LEFT JOIN usuario_accion UA
	                ON UA.idUsuario = U.idUsuario
	                AND UA.idAccion = ACC.idAccion
                WHERE U.IdUsuario = $idUsuario AND ACT.idActividad = $idActividad
                GROUP BY ACC.idAccion
                ORDER BY fechaAccion ASC;
                ";
     
      
      // prepare query statement
      $stmt = $this->conn->prepare($query);
     
      // execute query
      $stmt->execute();
  
      return $stmt;
    }

    function obtenerDetallePuntos($idUsuario, $limit){

   if (!empty($limit)) {
       $limitQuery = " LIMIT ".$limit;
       };
   
    // select all query
     $query =  "SELECT ACT.idSticker, ACC.fechaAccion, ACC.nombreAccion, ACC.puntos
                FROM usuario_accion UA
                LEFT JOIN acciones ACC
	                ON ACC.idAccion = UA.idAccion
                LEFT JOIN actividades ACT
	                ON ACT.idActividad = ACC.idActividad	
                WHERE UA.IdUsuario = $idUsuario		
                ORDER BY ACC.fechaAccion DESC".$limitQuery.";";
     
      
   

      // prepare query statement
      $stmt = $this->conn->prepare($query);
     
      // execute query
      $stmt->execute();
  
      return $stmt;
    }    
}
