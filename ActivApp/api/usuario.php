<?php
// database connection and table name
class Usuario{
    private $conn;
    private $table_name = "etapa";

    public $UsuarioID;
    public $Alias;    

  // constructor with $db as database connection
    public function __construct($db){   
      $this->conn = $db;    
    }

  // Completa la tarea pendiente
  function validar($usuario, $password){
      
      // select all query
      $query = "SELECT UsuarioID, Alias
            FROM usuario               
            WHERE Estado = 'A' 
              AND Usuario = :username
              AND Password = :password
            LIMIT 1;";
      
      // prepare query statement
      $statement = $this->conn->prepare($query);

      $statement->bindValue(':username', $usuario, PDO::PARAM_STR);
      $statement->bindValue(':password', $password, PDO::PARAM_STR);

      // execute query
      $statement->execute();

      return $statement;
  }

}
