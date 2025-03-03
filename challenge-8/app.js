const cartItems = document.getElementById("cart-items");
const products = document.querySelectorAll(".product");
const emptyCart = document.querySelector(".empty-cart");
const cartTotal = document.getElementById("cart-total");


let cart = [];

function addToCart(name, price) {
  const existingProduct = cart.find((item) => item.name === name);
  if (existingProduct) {
    existingProduct.quantity += 1;
    console.log(existingProduct);
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1,
    });
  }
  addCart();
}

function updateQuantity(name, change) {
    const item = cart.find(item => item.name === name);
    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) {
        removeFromCart(name);
      } else {
        addCart();
      }
    }
  }


function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    addCart();
  }

function addCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="empty-cart">Cart is empty</div>';
  } else {
    cart.forEach((element) => {
      const item = document.createElement("div");
      item.className = "cart-item";
      item.innerHTML = ` <span>${element.name}</span>
                <div class="quantity-controls">
                    <span>$${(element.price * element.quantity).toFixed(2)}</span>
                    <button onclick="updateQuantity('${
                      element.name
                    }', -1)">-</button>
                    <span>${element.quantity}</span>
                    <button onclick="updateQuantity('${
                      element.name
                    }', 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart('${
                      element.name
                    }')">Remove</button>
                </div>
            `
            cartItems.appendChild(item);
    });
  }
  const total = cart.reduce((sum, items) => sum + items.price * items.quantity, 0);
  cartTotal.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
}

addCart()