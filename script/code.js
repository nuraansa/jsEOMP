let cart = []

let myProducts = [
    {
      id: 1,
      name: "Sparkle Rectangle Earing",
      price: "10.00",
      image: "https://i.postimg.cc/RZGVBCFL/p1s.jpg",
      description: "18k gold plating, Water and Tarnish Proof.",
      quantity: ""
    },
    {
      id: 2,
      name: "Heart Dangle Earing",
      price: "20.00",
      image: "https://i.postimg.cc/1X2HjZxG/LJ10s.jpg",
      description: "18k gold plating, Water and Tarnish Proof.",
      quantity: ""
    },
    {
      id: 3,
      name: "Pearl Necklace Set",
      price: "30.00",
      image: "https://i.postimg.cc/43gfVK0G/LJ7s.jpg",
      description: "18k gold plating, Water and Tarnish Proof.",
      quantity: ""
    },
    {
      id: 4,
      name: "Box Hoop",
      price: "40.00",
      image: "https://i.postimg.cc/Zq8kSVVt/p4s.jpg",
      description: "18k gold plating, Water and Tarnish Proof.",
      quantity: ""
    },
    {
      id: 5,
      name: "Diamond Bulky Hoop",
      price: "50.00",
      image: "https://i.postimg.cc/VNQyp39W/p7s.jpg",
      description: "18k gold plating, Water and Tarnish Proof.",
      quantity: ""
    },
    {
      id: 6,
      name: "Tiny Heart Hoop",
      price: "60.00",
      image: "https://i.postimg.cc/TwdsXGKg/p3s.jpg",
      description: "18k gold plating, Water and Tarnish Proof.",
      quantity: ""
    },
    {
      id: 7,
      name: "Dangle Hoop",
      price: "70.00",
      image: "https://i.postimg.cc/4dWSfMcM/p6s.jpg",
      description: "18k gold plating, Water and Tarnish Proof.",
      quantity: ""
    },
    {
      id: 8,
      name: "Layered Sparkle Earing",
      price: "80.00",
      image: "https://i.postimg.cc/2y2rf2j8/p2s.jpg",
      description: "18k gold plating, Water and Tarnish Proof.",
      quantity: ""
    },
    {
      id: 9,
      name: "Lock Hoop",
      price: "90.00",
      image: "https://i.postimg.cc/BZgqDQ59/p5s.jpg",
      description: "18k gold plating, Water and Tarnish Proof.",
      quantity: ""
    },
  ];
  
let cartt = []

  localStorage.setItem("products", JSON.stringify(myProducts));
  let information = JSON.parse(localStorage.getItem("products"));
  // console.log(Information);
  
  let productList = document.querySelector("#productList");
  try{
  information.forEach((prod) => {
    productList.innerHTML += `
        <div class="col">
          <div class="card h-100 border border-black shadow">
            <img src="${prod.image}" class="card-img-top" alt="product" loading="lazy" id="pics">
            <div class="card-body">
              <h5 class="card-title">${prod.name}</h5>
              <p class="card-text">${prod.description} <br> <br></p>
              <p class="price-text">R${prod.price}</p>
            </div>
            <div class="card-footer">
             <button type="button" class="adbtn border border-black shadow">+ A D D</button>
             <button type="button" class="vbtn border border-black shadow" data-bs-toggle="modal" data-bs-target="#exampleModal`+ prod.id +`">
               V I E W
             </button>
             <div class="modal fade" id="exampleModal` + prod.id +`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div class="modal-dialog">
               <div class="modal-content">
                 <div class="modal-header">
                   <h1 class="modal-title fs-5" id="exampleModalLabel">${prod.name}</h1>
                   <button type="bAdd="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <div class="modal-body">
                 <img src="${prod.image}" class="card-img-top" alt="product" loading="lazy" id="pics">
                 ${prod.description}
                 </div>
                 <div class="modal-footer">
                 ${prod.price}
                 </div>
               </div>
             </div>
           </div>
            </div>
          </div>
        </div>
        `;
        addToCart()
  })
}catch(e){
  // location.reload()
  console.log('it works');
}

function addToCart(){
  const addButtons = [...document.querySelectorAll('.adbtn')]
    addButtons.forEach((data,i)=>{
      data.addEventListener('click',()=>{
      let wholeDiv = data.parentElement.parentElement
      let wholeBody = wholeDiv.firstChild
      let img = wholeDiv.firstChild.nextSibling
      let name = img.nextElementSibling.firstChild
      console.log(name)
      let desc = name.nextElementSibling.nextElementSibling.firstChild
      let price = desc.parentElement.nextElementSibling
      let newObject = {
      id: `${Number(myProducts[i].id++)}`,
      name: name.nextElementSibling.innerText,
      price: price.innerText,
      image: img.getAttribute('src'),
      description: desc.nextElementSibling.innerText,
      quantity: `${myProducts[i].quantity++}`

      }
      cartt.push(newObject)
      console.log(cartt)
      localStorage.setItem('cartData',JSON.stringify(cartt))
      })
    })
}
  // console.log(localStorage.getItem("products"));
  