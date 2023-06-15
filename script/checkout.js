// localStorage.setItem("checkoutProd", JSON.stringify([]));
let checkout = JSON.parse(localStorage.getItem("cart"));
let newCart = JSON.parse(localStorage.getItem('cartData'))
console.log(newCart)
let newerCart = JSON.parse(localStorage.getItem('cartData'))

let cart = JSON.parse(localStorage.getItem("products"));
localStorage.setItem("cart", JSON.stringify(checkout));
let prodOut = document.querySelector("#checkoutProd");

addToCheckout()

function addToCheckout(){
    console.log(checkout)
}
    newerCart.forEach((item,i)=>{
        console.log(checkout)
        console.log(prodOut)
        prodOut.innerHTML += `
        <tr style="font-size: 20px;">
        <td><img src="${item.image}" style="width:100px"></td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        
        `
    })

// Object.keys(cart).forEach((key) => {
//   let prodOut = document.querySelector("#checkoutProd");
//   checkout.forEach((prod) => {
//     if ((checkout[prod] = [""])) {
//       let Data = cart[key];
//       prodOut.innerHTML += `
//       <tr style="font-size: 20px;">
//       <td><img src="${Data.image}" style="width:100px"></td>
//       <td>${Data.name}</td>
//        <td>${Data.description}</td>
//       <td>R${Data.price}</td>
//       <td>${Data.quantity}</td>
//         `;
//     }
//   });
// });
// Object.keys(cart).forEach((key) => {
//   let total = document.getElementById("total");
//   checkout.forEach((prod) => {
//     if ((checkout[prod] = [""])) {
//       let Data = cart[key];
//       total.innerHTML += `
//       <text class="text-muted justify-content-end" id="total">R${Data.Price}</text>
//         `;
//     }
//   });
// });
