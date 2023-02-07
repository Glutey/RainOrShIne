
$(document).ready(
  $("#search-button").click(function(event){
    event.preventDefault();
  var cityName = $("#search-input").val();
  var weatherToday = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=d00e97b068c768695d109b4ec943d226';
  var queryUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=d00e97b068c768695d109b4ec943d226';

  console.log(cityName);


  $.ajax({
    url: weatherToday, 
    method: "GET",
    statusCode: {
      404 : function() {
        alert ("City not found.");
      },
      200 : function(response){
        var currentDate = moment().format("MMM Do YY");
        console.log(weatherToday);
        console.log(response);
        console.log(response.length);
        var jsonString = JSON.stringify(response);
        localStorage.setItem("weatherData", jsonString);
        console.log(currentDate);
          
          // Transfer content to HTML
        $("#city").text('City: ' + response.name);
        $("#date").html('Date: ' + moment().format("MMM Do YY")); 
        $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
        $("#temperature").html('Temperature ' + response.main.temp);
        $("#pressure").html('Pressure ' + response.main.pressure);
        $("#humidity").html('Humidity ' + response.main.humidity);
      }
    }
  })

    $.ajax({
    url: queryUrl,
    method: "GET",
    statusCode: {
      200 : function(response){
        console.log(queryUrl);
        console.log(response);
        
        var card_count = 0
        for (var i = 0; i < response.list.length; i += 8){
          console.log(response.list[i]);

          // Transfer content to HTML
           $("#dates-" + card_count).html('Date: ' + moment().add(card_count, "days").format("MMM Do YY")); 
           $("#weather_image-" + card_count).attr("src", "http://openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png");
           $("#temp-" + card_count).html('Temperature ' + response.list[i].main.temp);
           $("#humid-" + card_count).html('Humidity ' + response.list[i].main.humidity);
           card_count++;
        }
        var jString = JSON.stringify(response);
        localStorage.setItem("moreData", jString);
           
      }
    }
  })
  
  }));
