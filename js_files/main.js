document.addEventListener("DOMContentLoaded", (e) => {
  let btnGo = document.querySelector("#btn");

  btnGo.addEventListener("click", function () {

const foreignNumber = document.querySelectorAll('input');
console.log(foreignNumber);


const valueOfSelector = document.querySelector("#currency").value;
console.log(valueOfSelector);


fetch('https://api.nbp.pl/api/exchangerates/tables/a/?format=json')
.then(response => response.json())
.then((response) => {
  console.log(response);
const data = response[0]["rates"];
let dataOfAll = data;

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

})
.catch((error) => {
  console.log(error);
});

}​)​​
  });
//});
