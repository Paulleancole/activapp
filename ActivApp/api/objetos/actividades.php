<?php
class actividad{
 
    // database connection and table name
    private $conn;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // Resumen actividades
    function obtenerResumenActividades($idUsuario){
       
            // QUERY QUE ME TRAE BIEN LOS DATOS DEL ARCHIVO DE STICKERS EN SQLYog PERO ACA NO ME ANDA select all query
    /* $query = "SELECT ACT.idActividad, ACT.`nombreActividad`, STI.`Archivo`,
	                SUM(IF(UA.`idAccion` IS NULL, 0,ACC.`puntos`)) AS Puntos
                FROM usuarios U
                LEFT JOIN acciones ACC
	                ON ACC.idUnidadGestion = U.idUnidadGestion
                LEFT JOIN actividades ACT
	                ON ACT.idActividad = ACC.idActividad
                LEFT JOIN usuario_accion UA
	                ON UA.idUsuario = U.idUsuario
	                AND UA.idAccion = ACC.idAccion
	                	        LEFT JOIN sticker STI
	                ON STI.idSticker = ACT.idSticker
                WHERE U.IdUsuario = $idUsuario
                GROUP BY ACT.idActividad
                ORDER BY ACT.Orden;
                ";

                */


     // select all query
      $query = "SELECT ACT.idActividad, ACT.`nombreActividad`, ACT.`idSticker`,	
	                SUM(IF(UA.`idAccion` IS NULL, 0,ACC.`puntos`)) AS Puntos
                FROM usuarios U
                LEFT JOIN acciones ACC
	                ON ACC.idUnidadGestion = U.idUnidadGestion
                LEFT JOIN actividades ACT
	                ON ACT.idActividad = ACC.idActividad
                LEFT JOIN usuario_accion UA
	                ON UA.idUsuario = U.idUsuario
	                AND UA.idAccion = ACC.idAccion
                WHERE U.IdUsuario = $idUsuario
                GROUP BY ACT.idActividad
                ORDER BY ACT.Orden;";

      // prepare query statement
      $stmt = $this->conn->prepare($query);
 
      // execute query
      $stmt->execute();

      return $stmt;
    }    
}
