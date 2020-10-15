/**
 * Calculawrite
 */
//saisie du premier nombre
let expression=window.prompt("entrer votre premier nombre");
 while (isNaN(expression)) {
  expression= window.prompt("Merci de répondre un nombre.");
}

//saisie de l'opérateur
  
  let ope=window.prompt("entrer un symbole  arithmétique (+, /, +, -)");

while(ope !== "+" 
&& ope !=="-"
&& ope !== "/" 
&& ope !=="*");

//saisie du deuxiéme nombre
let expression2=window.prompt("entrer votre premier nombre");
 while (isNaN(expression2)) {
  expression2= window.prompt("Merci de répondre un nombre.");
}

let result;
if (ope ==="+") {
    result=expression + expression2;
}
else if (ope ==="-") {
    result=expression + expression2; 
    
}
else if (ope ==="*") {
    result=expression + expression2; 
    
}
else if (ope ==="/") {
    result=expression + expression2; 
    
}
else{
    result=("cela ne marchera pas")
}