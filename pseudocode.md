Weather Dashboard

This application is simple a weather dashboard that enables users to search a city and retrieve the forecast for that city.

A basic html page that provides a search input form with a list of the search history bellow.

Utilites:
    [OpenWeather API](https://openweathermap.org/api)
    JQuery CDN
    Bootstrap CDN
    


Need an input form along with button to search cities
    -Add event listener to input form and search button
    -store input value in a variable


Input is taken and populates current and future forecast
    -Use input variable along with weather API to build queryURL
    -Get required data array from API

Input is saved in the history list
    -Add input form value to history list
    -Add event listeners to list elements
    -Save list in local storage 

Current weather displays city name, date, weather icon, temperature, humidity, wind speed, UV index
    -Use AJAX to get API data needed
    -Display in current weather div with listed array items

Uv index displays color to indicate if conditions are favorable, moderate, or severe
    <!-- Api may provide this feature -->
    <!-- Perhaps create function to dynamically style with conditionals -->

Future weather conditions display a 5-day forecast that display the date, weather icon, temperature, humidity
    -Use AJAX to get api 5 day weather data
    -Display 5 day weather in the forecast div with listed array items

Search history should display current and future conditions again when selected
    -Searched list items will run AJAX call again
    -City selected will be displayed again as if searched 


