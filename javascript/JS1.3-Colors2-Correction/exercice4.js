/**
 * demander à l'utilisateur un nombre.
 * afficher dans la consoles la table de multiplication de ce nombre
 */
 
 
 
 
 
 const x = window.prompt("Premier nombre :");
 let expre=parseFloat(x);



let result = '\n';
for (let i = 0; i <=10; ++i) {
console.log(expre + "*" + i + "=" + expre*i)   
        result += (i*expre) + ' ';
}
 
 

 
 
 
 
 
 /**
//déclaration d'un tableau vide
const colors = [];

// ajout d'éléments

//colors vaut [rouge]
colors.push("Rouge");

//colors vaut [bleu]
colors.push("Bleu");

//colors vaut [rouge et bleu]

//affichage
document.write(colors[0]);
*/