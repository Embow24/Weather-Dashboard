//variable to get the current date from day.js.
var currentDate = dayjs();

// API key //
var APIKey = "9404079bc4b50a677177ee55266f7815"

//
var searchHistory = []

//function to fetch the current weather data when the search button is clicked
$("#search-button").on("click", function(event) {
event.preventDefault()

function addToHistory(search) {
    if(searchHistory.indexOf(search) !== -1) {
        return;
    }
searchHistory.push(search)
localStorage.setItem("searchHistory", JSON.stringify(searchHistory))
historyList()
}

//variable to get the text from the search box
var city = $("#search-input").val()
addToHistory(city)
console.log(searchHistory)

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

//console.log(data.list[0].weather[0].icon)
var icon = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png"
    
//Displays the city name, current date and weather icon
$("#today").html("<h1>" + data.city.name + " (" + currentDate.format('DD/MM/YYYY') + ")" + "<img src=" + icon +">" + "</h1>")
//Change temperature to celsius
var tempC = data.list[0].main.temp - 273.15

//create divs to display the temperature, wind speed and humidity of the current location
var currentTemp = $('<p>').text("Temp: " + tempC.toFixed(2) + " C")
var currentWind = $('<p>').text("Wind: " + data.list[0].wind.speed + " KPH")
var currentHumidity = $('<p>').text("Humidity: " + data.list[0].main.humidity + "%")

//Add the temp, wind and humidity variable to the section with id = today in the html file
$("#today").append(currentTemp)
$("#today").append(currentWind)
$("#today").append(currentHumidity)

//Display the title 5-Day forecast
$("#forecast").html("<h2>5-Day Forecast:</h2>")

//variable to create an array for the data of the next 5 days
var card = [data.list[2], data.list[10], data.list[18], data.list[26], data.list[34]]

//For loop to make 5 cards showing next 5 days weather forecast
for (var i=0; i<card.length; i++) {

//Change temperature to celsius
var forecastTempC = card[i].main.temp - 273.15

//variable for the icons needed for the next 5 days forecast
var forecastIcon = "https://openweathermap.org/img/wn/" + card[i].weather[0].icon + "@2x.png"

//variable to change the format of the date 
var forecastDate = dayjs(card[i].dt_txt).format('DD/MM/YYYY')

//create card for 5 day weather forecast
var forecast = $('<div class= "card text-bg-secondary mb-3" style="max-width: 10rem">')
var date = $('<h5 class="card-title">').text(forecastDate)
var icons = $("<img src=" + forecastIcon +">")
var temp = $('<p class="card-text">').text("Temp: " + forecastTempC.toFixed(2) + " C")
var wind = $('<p class="card-text">').text("Wind: " + card[i].wind.speed + " KPH")
var humidity = $('<p class="card-text">').text("Humidity: " + card[i].main.humidity + "%")

$("#forecast").append(forecast)
$(forecast).append(date)
$(forecast).append(icons)
$(forecast).append(temp)
$(forecast).append(wind)
$(forecast).append(humidity)
}

})
})

function getHistory() {
    var localHistory = localStorage.getItem("searchHistory")
    if(localHistory) {
        searchHistory = JSON.parse(localHistory)
    }
    historyList();
}

function historyList() {
    $("#history").html("")
    for(var i=0; i< searchHistory.length; i++) {
    var historyButton = $('<button type="button" class="btn btn-secondary" id="search-history">').text(searchHistory[i])
    $('#history').append(historyButton)
    }
}
getHistory();

function retrieveHistory(city) {

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

//console.log(data.list[0].weather[0].icon)
var icon = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png"
    
//Displays the city name, current date and weather icon
$("#today").html("<h1>" + data.city.name + " (" + currentDate.format('DD/MM/YYYY') + ")" + "<img src=" + icon +">" + "</h1>")
//Change temperature to celsius
var tempC = data.list[0].main.temp - 273.15

//create divs to display the temperature, wind speed and humidity of the current location
var currentTemp = $('<p>').text("Temp: " + tempC.toFixed(2) + " C")
var currentWind = $('<p>').text("Wind: " + data.list[0].wind.speed + " KPH")
var currentHumidity = $('<p>').text("Humidity: " + data.list[0].main.humidity + "%")

//Add the temp, wind and humidity variable to the section with id = today in the html file
$("#today").append(currentTemp)
$("#today").append(currentWind)
$("#today").append(currentHumidity)

//Display the title 5-Day forecast
$("#forecast").html("<h2>5-Day Forecast:</h2>")

//variable to create an array for the data of the next 5 days
var card = [data.list[2], data.list[10], data.list[18], data.list[26], data.list[34]]

//For loop to make 5 cards showing next 5 days weather forecast
for (var i=0; i<card.length; i++) {

//Change temperature to celsius
var forecastTempC = card[i].main.temp - 273.15

//variable for the icons needed for the next 5 days forecast
var forecastIcon = "https://openweathermap.org/img/wn/" + card[i].weather[0].icon + "@2x.png"

//variable to change the format of the date 
var forecastDate = dayjs(card[i].dt_txt).format('DD/MM/YYYY')

//create card for 5 day weather forecast
var forecast = $('<div class= "card text-bg-secondary mb-3" style="max-width: 10rem">')
var date = $('<h5 class="card-title">').text(forecastDate)
var icons = $("<img src=" + forecastIcon +">")
var temp = $('<p class="card-text">').text("Temp: " + forecastTempC.toFixed(2) + " C")
var wind = $('<p class="card-text">').text("Wind: " + card[i].wind.speed + " KPH")
var humidity = $('<p class="card-text">').text("Humidity: " + card[i].main.humidity + "%")

$("#forecast").append(forecast)
$(forecast).append(date)
$(forecast).append(icons)
$(forecast).append(temp)
$(forecast).append(wind)
$(forecast).append(humidity)
}
})
}

$(".btn").on('click', function(event){
    var city = event.target.textContent
    retrieveHistory(city)
}) 
