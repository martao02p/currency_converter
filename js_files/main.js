document.addEventListener("DOMContentLoaded", function() {
  // let sectionAbout = document.getElementById('about');
  // let paragraphs = sectionAbout.getElementsByClassName('box');

fetch('http://api.nbp.pl/api/exchangerates/tables/a/today/')
.then((response) => {
  return response.json();
}).then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error);
});
});