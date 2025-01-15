<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php
    if($_SERVER['REQUEST_METHOD']==="GET"){
        if (isset ($_GET["prenom"]) && !empty(trim($_GET["prenom"]))){
            echo htmlentities($_GET["prenom"]);

        }
        else {
            header("Location! index.php");
            exit;
        }
    }
    

    if($_SERVER['REQUEST_METHOD']==="POST"){
        if (isset ($_POST["prenom"]) && !empty(trim($_POST["prenom"])) && 
        isset ($_POST["nom"]) && !empty(trim($_POST["nom"]))){;
            echo htmlentities($_POST["prenom"]). " " .htmlentities($_POST["nom"]) ;
        }
        else {
            header("Location! index.php");
            exit;
        }
    }
    else {
        header("Location! index.php");
        exit;
    }
    ?>
    
</body>
</html>