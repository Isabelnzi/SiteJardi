<?php
include 'header.php';
include 'newfile.php';
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>contact</title>
<link rel= "stylesheet" href="assets/css/style.css">     
</head>

<body>

<h1>Vos coordonnées</h1>
<h3>*Ces zones sont obligatoires pour envoyer le formulaire.</h3>
<br>
<form action="contact.php" method="get">
<label for="entreprise">Société:</label>
<input type="text" name="entreprise" id="entreprise" required>
<span id="missEntreprise">*</span><br>
<br>
<label for="personne">Personne à contacter:</label>
<input type="text" name="personne" id="personne" required>
<span id="missPersonne">*</span><br>
<br>
<label for="adresse de l'entreprise">Adresse de l'entreprise:</label>
<textarea name="adresse" id="adresse" rows="3" required></textarea>
<span id="missAdresse"></span><br>
<br>
<label for="code_postal">Code postal:</label>
<input type="text" name="code_postal" id="code_postal" required>
<span id="missCode">*</span><br>
<br>
<label for="ville">Ville:</label>
<input type="text" name="ville" id="ville" required>
<span id="missVille">*</span><br>
<br>
<label for="email">E-mail:</label>
<input type="text" name="email" id="email" required>
<span id="missMail">*</span><br> 
<br>
<label for="telephone">Téléphone:</label>
<input type="tel" name="telephone" id="telephone" required>
<span id="missTelephone">*</span><br> 
<br>
<label for="sélectionnez l'environnement technique du projet">Sélectionnez l'environnement technique du projet: </label> 
<textarea id="projet" name="projet" rows="5" cols="30"></textarea><br>
<br>
<select id="choix" name="Choisissez">
<option value= "Choisissez">Choisissez</option>
<option value="Access">Access</option>
<option value="Java">Java</option>
<option value="Delphi">Delphi</option>
<option value="Windev">Windev</option>
<option value="Visual Basic">Visual Basic</option> 
<option value="Power Builder">Power Builder</option>
<option value="Internet">Internet</option>
<option value="Intranet">Intranet</option>
<option value="Windows NT">Windows NT</option> 
<option value="Unix">Unix</option>
<option value="SQL Server">SQL Server</option> 
<option value="Oracle">Oracle</option>
<option value="Autres">Autres...</option>
</select><br>
<br>
<input type="submit" value="Envoyer" id="bouton_envoi">
<input type="reset" value="Effacer">		<!-- type="reset" pour effacer le formulaire -->
 </form>
</body>
<?php 
include 'footer.php';
?>

