const problems = Math.pow(4, 0.5)+"spiderman"+"987"+Math.sqrt(9);
console.log(problems);

function generatePin(){ 
    return Math.floor(Math.random()*90000) + 10000; 
  };

  const random = generatePin();
  console.log(random);

  const product = 5; 
const price = "7"; 
const subTotal = product * price; 
const tax = subTotal/10; 
const total = subTotal + tax;

console.log(total);

const incrementButton = document.getElementById("increment-btn")
    incrementButton.addEventListener("click", function () { 
    incrementButton.innerText = parseInt(incrementButton.innerText)+3; 
    }) 

   