var apiKey = 'd00e97b068c768695d109b4ec943d226';
//api key for use on the OpenWeather site

$(document).ready(
  $("#search-button").click(function(event){
    event.preventDefault();
  var cityName = $("#search-input").val();
  var weatherToday = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=appid=d00e97b068c768695d109b4ec943d226';
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
        console.log(weatherToday);
        console.log(response);
        for (var i = 0; i < response.length; i++){ //removed the .list from this line as it isnt applicable to the object being called
          console.log(response.length[i]);
          var jsonString = JSON.stringify(response);
          localStorage.setItem("weatherData", jsonString);
  
          // store into local storeage here
        }
      }
    }
  })
// Here we run our AJAX call to the OpenWeatherMap API
// $.ajax({
//     url: queryUrl,
//     method: "GET",
//     statusCode: {
//       404 : function() {
//         alert ("Re-show input. City not found.");
//       },
//       200 : function(response){
//         console.log(queryUrl);
//         console.log(response);
        
//         for (var i = 0; i < response.list.length; i += 8){
//           // jquery newcard for each day containing all in info such as 
//           console.log(response.list[i]);
//           // store into local storage here
//         }
//       }
//     }
//   })
  
      // Transfer content to HTML
      // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
      // $(".wind").text("Wind Speed: " + response.wind.speed);
      // $(".humidity").text("Humidity: " + response.main.humidity);
      
      // // Convert the temp to Celsius
      // var tempC = response.main.temp - 273.15;
  
      // // add temp content to html
      // $(".temp").text("Temperature (K) " + response.main.temp);
      // $(".tempC").text("Temperature (C) " + tempC.toFixed(2));
  
      // Log the data in the console as well
    //   console.log("Wind Speed: " + response.wind.speed);
    //   console.log("Humidity: " + response.main.humidity);
    //   console.log("Temperature (C): " + tempC);
  }));









$( document ).ready(function() {
    var appID = "d00e97b068c768695d109b4ec943d226";

    $(".query_btn").click(function(){

        var query_param = $(this).prev().val();

        if ($(this).prev().attr("placeholder") == "City") {
            var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&APPID=" + appID;
        } else if ($(this).prev().attr("placeholder") == "Zip Code") {
            var weather = "http://api.openweathermap.org/data/2.5/weather?zip=" + query_param + "&APPID=" + appID;
        }

        $.getJSON(weather,function(json){
            $("#city").html(json.name);
            $("#main_weather").html(json.weather[0].main);
            $("#description_weather").html(json.weather[0].description);
            $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
            $("#temperature").html(json.main.temp);
            $("#pressure").html(json.main.pressure);
            $("#humidity").html(json.main.humidity);
        });
    })

    // Optional Code for temperature conversion
    var fahrenheit = true;

    $("#convertToCelsius").click(function() {
        if (fahrenheit) {
            $("#temperature").text(((($("#temperature").text() - 32) * 5) / 9));
        }
        fahrenheit = false;
    });

    $("#convertToFahrenheit").click(function() {
        if (fahrenheit == false) {
            $("#temperature").text((($("#temperature").text() * (9/5)) + 32));
        }
        fahrenheit = true;
    });
});