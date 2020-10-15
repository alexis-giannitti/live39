/**
 * Discount
 */
 

// ----------------------------------------------------------------------------
// Data
// ----------------------------------------------------------------------------
const orders = [
  {id: 2340, customer: 101, product: 20, timestamp: "1591243565", price: "12.00"}, // 0
  {id: 2341, customer: 10, product: 12, timestamp: "1591603575", price: "32.50"}, // 1
  {id: 2342, customer: 123, product: 8, timestamp: "1592106089", price: "125.99"}, // 2
  {id: 2343, customer: 50, product: 21, timestamp: "1592824991", price: "39.95"}, // 3
  {id: 2344, customer: 45, product: 4, timestamp: "1593749455", price: "210.00"}, // ...
  {id: 2345, customer: 10, product: 45, timestamp: "1593955298", price: "25.45"},
  {id: 2347, customer: 27, product: 20, timestamp: "1595092774", price: "12.00"},
  {id: 2348, customer: 29, product: 14, timestamp: "1595383340", price: "89.10"},
  {id: 2346, customer: 27, product: 45, timestamp: "1594827411", price: "25.45"},
  {id: 2348, customer: 101, product: 20, timestamp: "1596032960", price: "12.00"},
  {id: 2349, customer: 145, product: 20, timestamp: "1596684542", price: "12.00"},
  {id: 2350, customer: 7, product: 68, timestamp: "1597220038", price: "32.85"},
  {id: 2351, customer: 90, product: 4, timestamp: "1598565765", price: "46.99"},
  {id: 2351, customer: 67, product: 8, timestamp: "1599135151", price: "125.99"}
];

// ----------------------------------------------------------------------------
// Functions
// ----------------------------------------------------------------------------
function appyDiscount(order, discount = 20) {
    // On récupère le prix sous forme de number
    const orderPrice = parseFloat(order.price);
    
    const discountedPrice = orderPrice - orderPrice * discount / 100;
    
    // toFixed(2) pour fixer le nombre de chiffre après la virgule à 2, toString() pour convertir simplement en chaine de caractère
    order.price = discountedPrice.toFixed(2);
    
    return order;
}

// On peux tester pour une seule entrée du tableau
/*
const singleOrder = orders[1];

const newOrder = updateOrderPrice(singleOrder, 30);

console.log(newOrder);
// */

// ----------------------------------------------------------------------------
// Program
// ----------------------------------------------------------------------------

// Pour toutes les commandes dans mon tableau
for(let i = 0; i < orders.length; ++i) {
    
    
    
    // Gestion de la date
    const epoch = parseInt(orders[i].timestamp) * 1000;
    const orderDate = new Date(epoch);
    const orderDateMonth = orderDate.getMonth(); // 0 - janvier, 1 - fevrier ... 6 - juillet
    const orderDateYear = orderDate.getFullYear()
    
    // Autre approche en utilisant des comparaisons de timestamp
    // const firstJul2020 = Date.parse('01 Jul 2020 00:00:00 UTC+2');
    // const firstAug2020 = Date.parse('01 Aug 2020 00:00:00 UTC+2');
    // if (epoch >= firstJul2020 && epoch < firstAug2020) ...
    
    // Appliquer la réduction à la commande, si la commande est passée au mois de juillet
    if (orderDateMonth === 6 && orderDateYear === 2020) {
        
        // Mise à jour du prix (sans fonction)
        /*  
        const orderPrice = parseFloat(orders[i].price);
        
        const discountedPrice = orderPrice - orderPrice * 20 / 100;
        
        orders[i].price = discountedPrice.toString();
        // */
        
    
        // Mise à jour du prix (avec fonction)
        orders[i] = appyDiscount(orders[i], 20);
        
    }

}

// Affichage
console.log(orders);