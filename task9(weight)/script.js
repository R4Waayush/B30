var friends = [
   {
    medel: "samsung",
    price: 50000,
    quantity: 43,
   },
   {
    medel: "Iphone 13",
    price: 70000,
    quantity: 62,
   },
   {
    medel: "one plus",
    price: 50000,
    quantity: 21,
   }
];

let TotalPrice = 0

friends.forEach(function(elem){
    
    TotalPrice += elem.price*elem.quantity;
})
console.log(TotalPrice);


