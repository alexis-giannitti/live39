/**
 * créer une fonction numberPrompt.
 * cette fonction prend en paramétre un message.
 * elle doit ouvrir un prompt avec window.prompt pour afficher le message.
 * Tant que l'utilisateur n'a pas entré de nombre, il faut lui redemander.
 * Elle doit retourner un nombre de type number entré par l'utilisateur.
 */
 
 function numberPrompt(message){
     let number = window.prompt(message);
 let input=parseFloat(number)
 
 
 while (isNaN(number)) {
  number= window.prompt("Merci de répondre un nombre.");
  input =parseFloat(number)
}
return number;
 }
 
 

let mynumber = numberPrompt("entrez un nombre SVP");
console.log(mynumber);