var apiKey = d00e97b068c768695d109b4ec943d226;
//api key for use on the OpenWeather site

var queryUrl = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';
// for the 5 day forcast

var geoCode = 'http:/ /api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}';
//direct geocoding api for places by name and not lat and long

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
  
      // Log the queryURL
      console.log(queryURL);
  
      // Log the resulting object
      console.log(response);
  
      // Transfer content to HTML
    //   $(".city").html("<h1>" + response.name + " Weather Details</h1>");
    //   $(".wind").text("Wind Speed: " + response.wind.speed);
    //   $(".humidity").text("Humidity: " + response.main.humidity);
      
      // Convert the temp to Celsius
    //   var tempC = response.main.temp - 273.15;
  
      // add temp content to html
    //   $(".temp").text("Temperature (K) " + response.main.temp);
    //   $(".tempC").text("Temperature (C) " + tempC.toFixed(2));
  
      // Log the data in the console as well
    //   console.log("Wind Speed: " + response.wind.speed);
    //   console.log("Humidity: " + response.main.humidity);
    //   console.log("Temperature (C): " + tempC);
    });