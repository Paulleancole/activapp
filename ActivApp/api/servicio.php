<?php
class Servicio{
 
    // database connection and table name
    private $conn;
    private $table_name = "servicio";
 
    // object properties
    public $ServicioID;
    public $ChoferID;
    public $Description;
    public $Estado;

 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // Completa la tarea pendiente
    function estadoactualizar($S){
 
      // select all query
      $query = "UPDATE servicio s
              LEFT JOIN etapa e
                ON e.ServicioID = s.ServicioID
                AND e.Estado <> 'C'
              SET s.Estado = 'C'
              WHERE s.ServicioID = " . $S ." AND
                e.ServicioID IS NULL;";
      
      // prepare query statement
      $stmt = $this->conn->prepare($query);
 
      // execute query
      $stmt->execute();

      return $stmt;
    }

    // read etapa proxima pendiente
    function obtenertodos(){
 
      // select all query
      $query = "SELECT
                  s.ServicioID, s.DescripcionAbreviada, s.Estado
              FROM servicio s                            
              WHERE s.Estado NOT IN ('X')
              ORDER BY s.ServicioID;";

 
      // prepare query statement
      $stmt = $this->conn->prepare($query);
 
      // execute query
      $stmt->execute();

       return $stmt;
    }
}
