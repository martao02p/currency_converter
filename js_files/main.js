//document.addEventListener("DOMContentLoaded", function() {
  let btnGo = document.getElementById('btn');

  //GET DATA
  function getData() {
fetch('http://api.nbp.pl/api/exchangerates/tables/a/')
.then(response => response.json())
.then((response) => {
const data = response[0]["rates"];
console.log(response);
console.log(data);
//return data;
})
.catch((error) => {
  console.log(error);
});
}



document.btnGo.addEventListener("click", function() {
  //GET THE VALUE OF THE INPUT
const foreignNumber = document.querySelectorAll('input').value;
console.log(foreignNumber);
//GET THE VALUE OF THE SELECTOR
const valueOfSelector = document.getElementById("currency").value;
console.log(valueOfSelector);
  let dataOfAll = getData();
  let usd = dataofAll[1]["mid"];
 let eur = dataofAll[7]["mid"];
  let chf = dataofAll[9]["mid"];
  
  if(valueOfSelector === "USD"){
document.querySelectorAll("#the_displayed_result").innerHTML = usd * foreignNumber + " zł";
  }
  else if(valueOfSelector === "EUR"){
document.querySelectorAll("#the_displayed_result").innerHTML = eur * foreignNumber + " zł";
  }
    else if(valueOfSelector === "CHF"){
document.querySelectorAll("#the_displayed_result").innerHTML = chf * foreignNumber + " zł";
  }
  
});


// }​);​​