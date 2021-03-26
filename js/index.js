// ITERATION 1

function calculateSubtotal(product) {
  let price = product.querySelector(".price span").innerText;
  let quantity= product.querySelector(".quantity input").value;
  let subTotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subTotal;

  return subTotal
}
// ITERATION 2
  function calculateAll() {
    let total = 0
    let products = document.querySelectorAll("tr.product")
    for (let p of products) {
      console.log(p)
      total += calculateSubtotal(p)
    }
    document.querySelector("#total-value span").innerText= total
  }
  
  // ITERATION 3
  



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

document.querySelector('#calculate').onclick = function (e) {
  calculateAll()
}
