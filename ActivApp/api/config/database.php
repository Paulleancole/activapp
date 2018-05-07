<?php
class Database{
 
    // specify your own database credentials
    private $host = "190.228.29.62";
    private $db_name = "activapp";
    private $username = "activapp";
    private $password = "4ct1v4pp_1930A";
    public $conn;
 
    // get the database connection
    public function getConnection(){
 
        $this->conn = null;
 
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
 
        return $this->conn;
    }
}
?>
