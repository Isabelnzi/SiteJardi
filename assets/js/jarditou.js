/*var formValid = document.getElementById("bouton_envoi");
var entreprise = document.getElementById("entreprise");
var missEntreprise = document.getElementById('missEntreprise');

var personne = document.getElementById('personne');
var missPersonne = document.getElementById('missPersonne');

var adresse=document.getElementById('adresse');
var missAdresse=document.getElementById('missAdresse');

var code =document.getElementById('code_postal');
var missCode =document.getElementById('missCode');

var ville =document.getElementById('ville');
var missVille =document.getElementById('missVille');

var mail =document.getElementById('email');
var missMail =document.getElementById('missMail');

var telephone =document.getElementById('telephone');
var missTelephone =document.getElementById('missTelephone');

var regexEntreprise=/^[0-9A-Za-z\sèéê]+$/; 
var regexPersonne=/^[A-Za-z\s]+$/; 
var regexAdresse=/^[0-9A-Za-z\sèéê]+$/; 
var regexCode= /^[0-9]{5}$/;
var regexVille=/^[A-Za-z\/\s]+$/; 
var regexMail=/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/; 
var regexTelephone= /^[0-9]{10}$/;

entreprise.onblur=entreprise;
personne.onblur=personne;
adresse.onblur=adresse;
code.onblur=code;
ville.onblur=ville;
mail.onblur=mail;
telephone.onblur=telephone;

formValid.addEventListener('click', validation);

function validation(event){
    //entreprise
    if (entreprise.validity.valueMissing) {	//Si le champ est vide
        event.preventDefault();
        missEntreprise.textContent = 'Entreprise manquant';
        missEntreprise.style.color = 'red';   
    } else if(regexEntreprise.test(entreprise.value) == false) {	//le format de données est incorrect
    	event.preventDefault();
    	missEntreprise.textContent = 'Format incorrect';
    	missEntreprise.style.color = "orange";     
    } else{
        missEntreprise.textContent = 'Ok';
        missEntreprise.style.color = 'green';
    }
    //personne
	if (personne.validity.valueMissing) {
		event.preventDefault();
		missPersonne.textContent = 'Personne manquant';
		missPersonne.style.color = 'red';   
    }else if(regexPersonne.test(personne.value) == false) {	 //le format de données est incorrect
    	event.preventDefault();
    	missPersonne.textContent = 'Format incorrect';
    	missPersonne.style.color = "orange";  
    }else{  
    	missPersonne.textContent = 'Ok';
    	missPersonne.style.color = 'green';
    }
	//adresse
	if (adresse.validity.valueMissing) {
		event.preventDefault();
		missAdresse.textContent = 'Adresse manquant';
		missAdresse.style.color = 'red';   
    }else if(regexAdresse.test(adresse.value) == false) { 	//le format de données est incorrect
    	event.preventDefault();
    	missAdresse.textContent = 'Format incorrect';
    	missAdresse.style.color = "orange";   	   
    }else{  
    	missAdresse.textContent = 'Ok';
    	missAdresse.style.color = 'green';
    }
    //code postal
	if (code.validity.valueMissing) {
		event.preventDefault();
		missCode.textContent = 'Code manquant';
		missCode.style.color = 'red';   
    }else if(regexCode.test(code.value) == false) {	 //le format de données est incorrect
    	event.preventDefault();
    	missCode.textContent = 'Format incorrect';
    	missCode.style.color = "orange";   
    }else{  
    	missCode.textContent = 'Ok';
    	missCode.style.color = 'green';
   }
	//ville
	if (ville.validity.valueMissing) {
		event.preventDefault();
		missVille.textContent = 'Ville manquante';
		missVille.style.color = 'red';   
    }else if(regexVille.test(ville.value) == false) {	 //le format de données est incorrect
    	event.preventDefault();
    	missVille.textContent = 'Format incorrect';
    	missVille.style.color = "orange";   
    }else{  
    	missVille.textContent = 'Ok';
    	missVille.style.color = 'green';
    }
	//mail
	if (mail.validity.valueMissing) {
		event.preventDefault();
		missMail.textContent = 'Mail manquant';
		missMail.style.color = 'red';   
    }else if(regexMail.test(mail.value) == false) {	 //le format de données est incorrect
    	event.preventDefault();
    	missMail.textContent = 'Format incorrect';
    	missMail.style.color = "orange";   
    }else{  
    	missMail.textContent = 'Ok';
    	missMail.style.color = 'green';
    }
	//telephone
	if (telephone.validity.valueMissing) {
		event.preventDefault();
		missTelephone.textContent = 'Telephone manquant';
		missTelephone.style.color = 'red';   
    }else if(regexTelephone.test(telephone.value) == false) {	 //le format de données est incorrect
    	event.preventDefault();
    	missTelephone.textContent = 'Format incorrect';
    	missTelephone.style.color = "orange";   
    }else{  
    	missTelephone.textContent = 'Ok';
    	missTelephone.style.color = 'green';
    }
 }


document.getElementById("choix").addEventListener("change",liste);

function liste () {
	var list = document.getElementById("choix").value;
	document.getElementById("projet").innerHTML = list;		//on affiche le contenu de l'élément <option> ciblé
}
*/
