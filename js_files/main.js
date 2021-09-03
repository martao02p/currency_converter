//document.addEventListener("DOMContentLoaded", function() {
  let btnGo = document.getElementById('btn');

  //GET DATA
fetch('http://api.nbp.pl/api/exchangerates/tables/a/')
.then(response => response.json())
.then((response) => {
const data = response[0]["rates"];
console.log(response);
console.log(data);
})
.catch((error) => {
  console.log(error);
});

//GET THE VALUE OF THE INPUT
const foreignNumber = document.querySelectorAll('input').value;
console.log(foreignNumber);
//GET THE VALUE OF THE SELECTOR
const valueOfSelector = document.getElementById("currency").value;
console.log(valueOfSelector);

// }​);​​