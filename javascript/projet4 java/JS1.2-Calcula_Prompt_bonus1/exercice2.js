/**
 * Bonus 1 de Calculaprompt : gestion des erreurs
 */
// Attention au nommage des variables
const expression = window.prompt("Entrez un nombre :");
const ope=window.prompt("entrer un symbole  arithmétique (+, /, +, -)")
const snumber= window.prompt("entrer un second nombre")

console.log(expression+" " +ope +" " + snumber);

const expre=parseFloat(expression);
const expre2=parseFloat(snumber);


const additionresult=expre+expre2;

console.log(additionresult);

const result1=additionresult;




const addition = parseFloat(expression);

if (addition >=0) {
  console.log("Votre entrer est bien un nombre.");
} else {
  console.log("votre enrée n'ai pas un nombre Dehors !");
}
  
const addition2 = parseFloat(snumber);
if (addition2 >=0) {
     console.log("Votre  dieuxiéme entrer est bien un nombre.");
}else{
    console.log("votre entré n'est pas un nombre recomencer*")
}



//analyser l'opérateur et effectuer l'opération//
//est ce que la valeur de ma string est bien un +

let result;

if (ope === "+"){ 
    // met dans le resultat l'addition des deux nombres
    result=(additionresult);
}

else if (ope === "-"){
    // met dans le resultat la soustraction des deux nombres
     result=(additionresult);
}
else if (ope === "*"){ 
   // result=(additionresult);
   alert(additionresult)
}
else if (ope === "/"){ 
     result=(additionresult);
}
else{
      result=("cela ne marchera pas")
     alert("votre calcule est érroné")
}

