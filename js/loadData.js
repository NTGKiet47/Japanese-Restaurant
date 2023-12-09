let products_array = null;
window.addEventListener("load", () => {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      products_array = data;
      loadData();
    });
});
function loadData() {
  let product_list = document.querySelector("#product-list");

  if (products_array != null) {
    products_array.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("card", "item");
      newProduct.innerHTML = `
        <div class="card-img">
            <img class="product-img" src="${product.img}" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
            <h5 class="card-title">${product.price} vnd</h5>
            <p class="card-text">${product.name}</p>
        </div>`;
      product_list.appendChild(newProduct);
    });
  } else {
    alert("Loading error!!!");
  }
}
