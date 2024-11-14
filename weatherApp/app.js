var data = [
    {city:'Tunis' , rain : 0 , humidity : 60 , windSpeed : 2 , temperature : 22 , icon : './images/soleil.png',description : 'Sunny day'},
    {city:'New York' , rain : 1.2 , humidity : 60 , windSpeed : 2.6 , temperature : 13 , icon : './images/pluie.png',description : 'Rainy day'},
    {city:'London' , rain : 2.4 , humidity : 100 , windSpeed : 4 , temperature : 6 , icon : './images/pluie.png',description : 'Rainy day'},
    {city:'Paris' , rain : 4 , humidity : 100 , windSpeed : 2.1 , temperature : 7 , icon : './images/pluie.png',description : 'Rainy day'},
    {city:'Berlin' , rain : 0 , humidity : 80 , windSpeed : 6 , temperature : 4 , icon : './images/nuages.png',description : 'Cloudy day'}
]

var input = document.querySelector('input')
var description = document.getElementById('weather-description')
var temp = document.querySelector('#weather-temp')
var rain = document.querySelector('#weather-rain')
var humidity = document.querySelector('#weather-humidity')
var wind = document.querySelector('#weather-wind')
var image = document.querySelector('img')


function displayWeather() {
    var cityName = input.value
    for (var element of data) {
        if(element.city.toLowerCase() === cityName.toLowerCase()){

            description.innerText = element.description
            image.src = element.icon
            temp.innerText = `Temperature : ${element.temperature} °C` 
            rain.innerText = `Rain : ${element.rain} mm`
            humidity.innerText = `Humdity : ${element.windSpeed} %`
            wind.innerText = `Wind Speed : ${element.windSpeed} km/h`
        }
    }

}