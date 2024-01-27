//variable to get the current date from day.js.
var currentDate = dayjs();

// API key //
var APIKey = "9404079bc4b50a677177ee55266f7815"

//function to fetch the current weather data when the search button is clicked
$("#search-button").on("click", function(event) {
event.preventDefault()

//variable to get the text from the search box
var city = $("#search-input").val()

//URL to get the current weather data from the open weather page
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey

//function to fetch the data from the api webpage
fetch(queryURL)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(queryURL)
    console.log(data)

//Displays the city name and current date
$("#today").html("<h1>" + data.city.name + " (" + currentDate.format('DD/MM/YYYY') + ")" + "</h1>")

//create divs to display the temperature, wind speed and humidity of the current location
var currentTemp = $('<p>').text("Temp: " + data.list[0].main.temp)
var currentWind = $('<p>').text("Wind: " + data.list[0].wind.speed + " KPH")
var currentHumidity = $('<p>').text("Humidity: " + data.list[0].main.humidity + "%")

//Add the temp, wind and humidity variable to the section with id = today in the html file
$("#today").append(currentTemp)
$("#today").append(currentWind)
$("#today").append(currentHumidity)

//Display the title 5-Day forecast
$("#forecast").html("<h2>5-Day Forecast:</h2>")

//create card for 5 day weather forecast
var forecast = $('<div class= "card text-bg-secondary mb-3" style="max-width: 13rem">')
var date = $('<h5 class="card-title">').text(data.list[1].dt_txt)
var temp = $('<p class="card-text">').text("Temp: " + data.list[1].main.temp)
var wind = $('<p class="card-text">').text("Wind: " + data.list[1].wind.speed + " KPH")
var humidity = $('<p class="card-text">').text("Humidity: " + data.list[1].main.humidity + "%")

$("#forecast").append(forecast)
$(forecast).append(date)
$(forecast).append(temp)
$(forecast).append(wind)
$(forecast).append(humidity)

})
})


