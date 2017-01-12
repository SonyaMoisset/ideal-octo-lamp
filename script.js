//v1
var quotes = [
  "lorem ipsum1",
  "lorem ipsum2",
  "lorem ipsum3",
  "lorem ipsum4",
  "lorem ipsum5",
  "lorem ipsum6",
  "lorem ipsum7",
  "lorem ipsum8",
  "lorem ipsum9",
  "lorem ipsum10"
];


function randomQuote() {
  var index = Math.floor(Math.random() * (quotes.length));
  return quotes[index];
}


function changeQuote() {
  document.getElementById("quote").innerHTML = randomQuote();
}


document
  .getElementById("btn-quote")
  .addEventListener("click", function (event) {
    event.preventDefault();
    changeQuote();
  });
