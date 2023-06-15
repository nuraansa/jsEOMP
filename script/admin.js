// local storage
let products = JSON.parse(localStorage.getItem("products"));

let prodList = document.querySelector("#prodList");
displayProducts();

// display products
function displayProducts() {
  prodList.innerHTML=""
  products.forEach((prod) => {
    prodList.innerHTML += `
    <tr style="font-size: 20px;">
       <td><img src="${prod.image}" style="width:100px"></td>
       <td>${prod.name}</td>
        <td>${prod.description}</td>
       <td>R${prod.price}</td>
       <td>
       <div class="col m-4">
          <a
            ><button
              type="button"
              class="btn btn-dark btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1${prod.id}"
            >
              EDIT
            </button></a
          >
        </div>

        <div
          class="modal fade"
          id="exampleModal1${prod.id}"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog i-screen">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <label for="Input1" class="form-label">Item Name</label>
                <input
                  class="col-12 my-3"
                  id="nameE${prod.id}"
                  type="text"
                  placeholder="Enter Name"
                  required
                />
                <label for="Input2" class="form-label">Item Image URL</label>
                <input
                  class="col-12 my-3"
                  id="imageE${prod.id}"
                  type="text"
                  placeholder="Enter URL"
                  required
                />
                <label for="Input3" class="form-label">Item Description</label>
                <input
                  class="col-12 my-3"
                  id="descriptionE${prod.id}"
                  type="text"
                  placeholder="Enter Description"
                  required
                />
                <label for="Input4" class="form-label">Item Price</label>
                <input
                  class="col-12 my-3"
                  id="priceE${prod.id}"
                  type="text"
                  placeholder="Enter Price"
                  required
                />
                <div class="modal-footer">
                  <button
                    type="Submit"
                    class="btn sub"
                    data-bs-dismiss="modal"
                    id="submit"
                    value="submit"
                    onclick='new Editproduct(${JSON.stringify(prod)})'
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
       </td>
       
       <td><button class='btn btn-danger' id="close-btn">X</button></td>
       </tr>
       `;
  });
  // editItems()
  deleteButtons();
  
}

let itemInput = document.querySelector(".i-screen");
let output = document.querySelector(".prodList");
let clientItems = [];
let tempID = 1;
let editbtn;

// add product
const addItem = document.querySelector("#submit");

function addItems() {
  console.log(addItem);
  let name = document.querySelector("#name");
  let desc = document.querySelector("#description");
  let imageUrl = document.querySelector("#image");
  let price = document.querySelector("#price");
  // let id = document.querySelector("#id");
  // let quantity = document.querySelector("#quant");
if (name.value == "", desc.value == "", imageUrl.value == "", price.value == "" ){
  alert("Add a Product")

}else {
  let newObject = {
  description: desc.value,
  // id: id.value,
  image: imageUrl.value,
  name: name.value,
  price: price.value,
  // quantity: quantity.value,
};

products.push(newObject);
localStorage.setItem("products", JSON.stringify(products));
prodList.innerHTML = "";
displayProducts();
}
  
}

// sort products
const sortItem = document.querySelector("#sort");

function sortItems() {
  products = products.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  });
  prodList.innerHTML = "";
  displayProducts();
  console.log("hi");
  displayProducts();.0

  // sortItem.addEventListener("click", (event)=>{
  //   event.preventDefault();
}

// delete product
function deleteButtons() {
  const toDelete = [...document.querySelectorAll("#close-btn")];
  
  toDelete.forEach((item) => {
    item.addEventListener("click", (event) => {
      let row = event.target.parentElement;
      let i=toDelete.indexOf(event.target)
      row.remove();
      // console.log(products);
      products.splice(i,1);
      localStorage.setItem("products", JSON.stringify(products))
      // console.log(products);
      displayProducts()
    });
  });
}

// edit product
function Editproduct(data){
  location.reload();
  let begin = products.findIndex(p=>{
    return p.id == data.id
  });
  this.name = document.querySelector(`#nameE${data.id}`).value
  this.image = document.querySelector(`#imageE${data.id}`).value
  this.description = document.querySelector(`#descriptionE${data.id}`).value
  this.price = document.querySelector(`#priceE${data.id}`).value
  products[begin] = Object.assign({}, this)
  localStorage.setItem('products', JSON.stringify(products))
  displayProducts()
}