// Attention au nommage des variables
let expression = window.prompt("Entrez un nombre :");

 while (isNaN(expression)) {
  expression= window.prompt("Merci de répondre un nombre.");
}


let ope=window.prompt("entrer un symbole  arithmétique (+, /, +, -)");
while (Symbol.match = false){
    ope = window.prompt("Merci de répondre avec la bonne expression");
}
let snumber= window.prompt("entrer un second nombre")
while (isNaN(snumber)) {
  snumber= window.prompt("Merci de répondre un nombre.");
}

console.log(expression+" " +ope +" " + snumber);

let expre=parseFloat(expression);
const expre2=parseFloat(snumber);


const additionresult=expre+expre2;

console.log(additionresult);

const result1=additionresult;



const addition = parseFloat(expression);

if (addition >=0) {
  console.log("Votre entrer est bien un nombre.");
}
 
else {
  console.log("votre enrée n'ai pas un nombre Dehors !");
}
  
const addition2 = parseFloat(snumber);
if (addition2 >=0) {
     console.log("Votre  dieuxiéme entrer est bien un nombre.");
}

   while (isNaN(addition)) {
  addition= window.prompt("Merci de répondre un nombre.");
}

//else{
   // console.log("votre entré n'est pas un nombre recomencer*")
//}



//analyser l'opérateur et effectuer l'opération//
//est ce que la valeur de ma string est bien un +

let result;

if (ope === "+"){ 
    result=(additionresult);
}


else if (ope === "-"){
        // met dans le resultat la soustraction des deux nombres

}
else if (ope === "*"){ 
        // met dans le resultat la mulitiplication des deux nombres

    result=(additionresult);
}
else if (ope === "/"){ 
        // met dans le resultat la division des deux nombres

     result=(additionresult);
}



//else{
  //  result=("cela ne marchera pas")
//}



    

    

alert(result);


