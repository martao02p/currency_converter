document.addEventListener("DOMContentLoaded", (e) => {
  let btnGo = document.querySelector("#btn");

  btnGo.addEventListener("click", function () {
    const foreignNumber = document.querySelector("input").value;
    console.log(foreignNumber);

    const valueOfSelector = document.querySelector("#currency").value;
    console.log(valueOfSelector);

    fetch("https://api.nbp.pl/api/exchangerates/tables/a/?format=json")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const data = response[0]["rates"];
        let dataOfAll = data;

        let usd = dataOfAll.find((rate) => rate.code === "USD")["mid"];
        let eur = dataOfAll.find((rate) => rate.code === "EUR")["mid"];
        let chf = dataOfAll.find((rate) => rate.code === "CHF")["mid"];

        let result = "";
        if (valueOfSelector === "usd") {
          result = usd * foreignNumber + " zł";
        } else if (valueOfSelector === "eur") {
          result = eur * foreignNumber + " zł";
        } else if (valueOfSelector === "chf") {
          result = chf * foreignNumber + " zł";
        }
        document.querySelector("#the_displayed_result").innerHTML = result;
      })
      .catch((error) => {
        console.log(error);
      });

    // }​)​​
  });
  // });
});
