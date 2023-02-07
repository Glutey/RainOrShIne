var apiKey = 'd00e97b068c768695d109b4ec943d226';
//api key for use on the OpenWeather site

$(document).ready(
  $("#search-button").click(function(event){
    event.preventDefault();
  var cityName = $("#search-input").val();
  var weatherToday = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=d00e97b068c768695d109b4ec943d226';
  var queryUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=d00e97b068c768695d109b4ec943d226';
//   var currentForecast = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&appid=d00e97b068c768695d109b4ec943d226';
  console.log(cityName);


  $.ajax({
    url: weatherToday, // changed the api call as the original was wrong.
    method: "GET",
    statusCode: {
      404 : function() {
        alert ("City not found.");
      },
      200 : function(response){
        var currentDate = moment().now;
        console.log(weatherToday);
        console.log(response);
        //removed the .list from this line as it isnt applicable to the object being called
        console.log(response.length);
        var jsonString = JSON.stringify(response);
        localStorage.setItem("weatherData", jsonString);
        console.log(currentDate);
          
          // Transfer content to HTML
        $("#city").text('City: ' + response.name);
        $("#date").html('Date: ' + moment().format("MMM Do YY")); // get moment and date
        // $("#description_weather").html('Description ' + response.weather[0].description);
        $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
        $("#temperature").html('Temperature ' + response.main.temp);
        $("#pressure").html('Pressure ' + response.main.pressure);
        $("#humidity").html('Humidity ' + response.main.humidity);
      }
    }
  })
// wrap this in an event listener that actions when the user clicks the button for the current days weather, it will then populate that 
// location with the forecast for the next 5 days
// including: date, temperature, humidity and weather icon
    $.ajax({
    url: queryUrl,
    method: "GET",
    statusCode: {
      404 : function() {
        alert ("City not found.");
      },
      200 : function(response){
        console.log(queryUrl);
        console.log(response);
        
        for (var i = 0; i < response.list.length; i += 8){
          console.log(response.list[i]);
        }
      }
    }
  })
  
  }));
