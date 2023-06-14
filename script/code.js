let myProducts = [
    {
      id: 1,
      name: "I Jewel 1",
      price: "10.00",
      image: "https://i.postimg.cc/RZGVBCFL/p1s.jpg",
      description: "something",
      quantity: ""
    },
    {
      id: 2,
      name: "H Jewel 2",
      price: "20.00",
      image: "https://i.postimg.cc/1X2HjZxG/LJ10s.jpg",
      description: "something",
      quantity: ""
    },
    {
      id: 3,
      name: "G Jewel 3",
      price: "30.00",
      image: "https://i.postimg.cc/43gfVK0G/LJ7s.jpg",
      description: "something",
      quantity: ""
    },
    {
      id: 4,
      name: "F Jewel 4",
      price: "40.00",
      image: "https://i.postimg.cc/Zq8kSVVt/p4s.jpg",
      description: "something",
      quantity: ""
    },
    {
      id: 5,
      name: "E Jewel 5",
      price: "50.00",
      image: "https://i.postimg.cc/VNQyp39W/p7s.jpg",
      description: "something",
      quantity: ""
    },
    {
      id: 6,
      name: "D Jewel 6",
      price: "60.00",
      image: "https://i.postimg.cc/TwdsXGKg/p3s.jpg",
      description: "something",
      quantity: ""
    },
    {
      id: 7,
      name: "C Jewel 7",
      price: "70.00",
      image: "https://i.postimg.cc/4dWSfMcM/p6s.jpg",
      description: "something",
      quantity: ""
    },
    {
      id: 8,
      name: "B Jewel 8",
      price: "80.00",
      image: "https://i.postimg.cc/2y2rf2j8/p2s.jpg",
      description: "something",
      quantity: ""
    },
    {
      id: 9,
      name: "A Jewel 9",
      price: "90.00",
      image: "https://i.postimg.cc/BZgqDQ59/p5s.jpg",
      description: "something",
      quantity: ""
    },
  ];
  
  localStorage.setItem("products", JSON.stringify(myProducts));
  let Information = JSON.parse(localStorage.getItem("products"));
  console.log(Information);
  
  document.querySelector("#productList");
  try{
  productList.innerHTML = "";
  myProducts.forEach((prod) => {
    productList.innerHTML += `
        <div class="col">
          <div class="card h-100 border border-black shadow">
            <img src="${prod.image}" class="card-img-top" alt="product" loading="lazy" id="pics">
            <div class="card-body">
              <h5 class="card-title">${prod.name}</h5>
              <p class="card-text">${prod.description} <br> ${prod.price}</p>
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
                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
  })
}catch(e){
  location.reload()
}
  console.log(localStorage.getItem("products"));
  