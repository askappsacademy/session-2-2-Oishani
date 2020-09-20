const run = function () {
  // Exercise 2

  document.getElementById('ptag-id').innerText = 'Hello World!';

  document.getElementById('ptag-id').style.backgroundColor = 'red';

  // Exercise 3 - Extra Credit
  const fruits = ['Apple', 'Banana', 'Orange'];

  // hint 1: how do we loop through items in JavaScript

  // hint 2: use how do we create an element and append an element?

  document.getElementById('shopping-cart').innerText = 'Fruit Cart';

  var ol = document.createElement('ol');
  ol.setAttribute('id', 'cart');
  document.body.appendChild(ol);
  var cartlist = document.getElementById('cart');

  for (let i = 0; i < fruits.length; i++) {
    const li = document.createElement('li');
    const text = document.createTextNode(fruits[i]);
    console.log(text);
    li.appendChild(text);
    cartlist.appendChild(li);
  }
};

run();
