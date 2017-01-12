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


$(function () {
  
  $.ajax({
    url: "http://ip-api.com/json"
  })
    .done(function (data) {

      var city = data.city,
        country = data.country,
        latitude = data.lat,
        longitude = data.lon,
        api = "fdf1425d366ca66c85b84ef54ec7e69e";

      console.log(data);
      console.log('city :', city );
      console.log('country :', country );
      console.log('latitude :', latitude );
      console.log('longitude :', longitude );
    
      $.ajax({
        url: "https://api.darksky.net/forecast/" + api + "/" + latitude + "," + longitude,
        crossDomain: true,
        dataType: "jsonp"
      })
      .done(function (d) {
        
        var latitude = d.latitude,
            longitude = d.longitude,
            city = d.timezone.split('/')[1], 
            temperature = d.currently.temperature,
            summary = d.currently.summary,
            mondayTemp = d.daily.data[0].apparentTemperatureMax,
            humidity = d.currently.humidity * 100 + "%";
        
        $("h1").text(city);
        $("p").text(summary + ", humidity: " + humidity);
        $("h2").text(temperature);
        
        console.log(d);
        console.log('latitude :', latitude);
        console.log('longitude :', longitude);
        console.log('city :', city);
        console.log('humidity :', humidity);
        console.log('temperature :', temperature);
        console.log('Monday temperature :', mondayTemp);
      });
    });
});
