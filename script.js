//variable to get the current date from day.js.
var currentDate = dayjs();

// API key //
var APIKey = "9404079bc4b50a677177ee55266f7815"

//function to fetch the current weather data when the search button is clicked
$("#search-button").on("click", function(event) {

event.preventDefault()

//variable to get the text from the search box
var city = $("#search-input").val()

//URL to get the data from the open weather page
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
})


})


