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
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey

//function to fetch the data from the api webpage
fetch(queryURL)
.then(function (response) {
    return response.json()
})
.then(function (data) {

    console.log(queryURL)
    console.log(data)

//Displays the city name and current date
$("#today").html("<h1>" + data.name + " (" + currentDate.format('DD/MM/YYYY') + ")" + "</h1>")

//create div to display the temperature of the current location
var temp = $('<div>').text("Temp: " + data.main.temp)
//create div to display the wind speed of the current location
var wind = $('<div>').text("Wind: " + data.wind.speed + " KPH")
//create div to display the humidity of the current location
var humidity = $('<div>').text("Humidity: " + data.main.humidity + "%")

//Add the temp, wind and humidity variable to the section with id = today in the html file
$("#today").append(temp)
$("#today").append(wind)
$("#today").append(humidity)
})


})


//URL to get the data from the open weather page
//var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey