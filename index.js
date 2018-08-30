var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({itemName:`${item}`, itemPrice:price});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0){ return "Your shopping cart is empty."
  }
  else if (cart.length === 1){ return "In your cart, you have " +cart[0].itemName+ " at $" +cart[0].itemPrice+ ".";
  }
  //I got really stuck here...until taught by one of the coaches that to call an object key/value you could use the code shown above, (cart[0].itemName). With this I was able to solve the function.
  else if (cart.length === 2){ return "In your cart, you have " +cart[0].itemName+ " at $" +cart[0].itemPrice+ ", and " +cart[1].itemName+ " at $" +cart[1].itemPrice+".";
  }
  else if (cart.length === 3){ return "In your cart, you have " +cart[0].itemName+ " at $" +cart[0].itemPrice+ ", " +cart[1].itemName+ " at $" +cart[1].itemPrice+ ", and " +cart[2].itemName+ " at $" +cart[2].itemPrice+".";
  }
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++){
    sum = sum + cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (item === cart[i].itemName){
      cart.splice(0,[i],item);
      return cart;
    }
    else return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
