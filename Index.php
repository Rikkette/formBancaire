<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!------------------------------liens JS & CSS------------------->
    <link rel="stylesheet" type="text/css" href="Style/Style.css">
    <link rel="stylesheet" type="text/js" href="Script/Script.js">
    <!----------------------Fonts------------------------------------>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap" rel="stylesheet">
    <!----------------------Favicon----------------------------------->
    <link rel="icon" type="image/png" sizes="32x32" href="Style/favicon.ico">
    <!---------------------------Titre-------------------------------->
    <title>Formulaire Banquaire</title>
</head>

<body>
    <header>
        <h1>Formulaire Bancaire</h1>
    </header>
    <main>
        <form id="formulaire" name="form1" action="page1.php" method="POST">

            <!-----php version  --->
            prenom:<input type="text" name="prenom" /><br />
            <input type="submit" value="ENVOYER" />

            <!-------------------- Nom --------------------->
            <div><label for="nom">Nom :</label></div>
            <div><input type="text" id="nom" name="nom" required placeholder="Nom"></div>
            <div><span id="nomError" class="error"></span></div>
            <!------------------------ Prenom ----------------------------->
            <div><label for="prenom">Prénom :</label></div>
            <div><input type="text" id="prenom" name="prenom" required placeholder="Prénom"></div>
            <div><span id="prenomError" class="error"></span></div>
            <!------------------------------- Date de naisance----------------->
            <div><label for="dateDeNaissance">Date de Naissance :</label></div>
            <div><input type="text" id="dateDeNaissance" name="dateDeNaissance" required
                    placeholder="Date de naissance"></div>
            <div><span id="dateDeNaissanceError" class="error"></span></div>
            <!------------------------------- Email -------------------------->
            <div><label for="email">Email :</label></div>
            <div><input type="text" id="email" name="email" required placeholder="Email"><br></div>
            <div><span id="emailError" class="error"></span></div>
            <!--------------------- Code Confidentiel ------------------------>
            <div><label for="codeConfidentiel">Code Confidentiel :</label></div>
            <div><input type="text" id="codeConfidentiel" name="codeConfidentiel" required
                    placeholder="Code Confidentiel"></div>
            <div><span id="codeConfidentielError" class="error"></span></div>
            <!------------------------------------ Bouton ------------------------------------>
            <div><button id="submitButton" type="submit"> Envoyer </button></div>
            <div><button type="reset" id="resetBtn"> Annuler </button></div>
            <div><span class="error"></span></div>

        </form>

        <?php

        //exo formulaire : form action="monscript.php"> //

        foreach ($_POST as $key => $value) {
            echo "<li><strong>" . htmlspecialchars($key) . ":</strong> " .
                htmlspecialchars($value) . "</li>";
        }

        //exo formulaire : $_REQUEST["nom_du_input"] //
        
        foreach ($_REQUEST["text"] as $text);
        {
            echo"$text - ";
        }

        ?>
        <!------------------------------------ Modal ---------------------------------------->
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p id="formStatus">Les informations seront transmises au serveur pour traitement.</p>
            </div>
        </div>
    </main>
    <footer>
        <p>&copy; 2024 Formulaire Bancaire</p>
    </footer>
    <script src="Script/Script.js"></script>
</body>

</html>