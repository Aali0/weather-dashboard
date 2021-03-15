// Global variable: Array to store search history list
const historyList = [];


$('#search-bttn').on('click', function(e) {
    e.preventDefault();
    let searchInput = $('#search-input').val();
    historyList.push(searchInput);
    weatherSearch(searchInput);
    window.localStorage.setItem('history', JSON.stringify(historyList));
});


// Function to search city, and pass the city as a paramater. To use function universely on the application.
function weatherSearch(searchInput) {
    $('#search-input').val('');
    $('.history').empty();
    $('#today').empty();
    historyList.map(city => {
        let cityBttn = $('<button>')
        let citySearched = $('<li>');
        cityBttn.addClass('cityList');
        cityBttn.text(city);
        citySearched.append(cityBttn);
        $('.history').append(citySearched);
    })


    
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q= ${searchInput} &appid=fb8dcd360b439f52ff821d36c1b6667c`,
        method: 'GET'
    }).then(function(res) {
        let lat = res.coord.lat;
        let lon = res.coord.lon;
        
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=fb8dcd360b439f52ff821d36c1b6667c`,
            method: 'GET'
        }).then(function(res){
            console.log(res)
            let cityName = $('<h4>').addClass('card-title').text(searchInput + ' (' + new Date().toLocaleDateString() + ') ');
            let weatherIcon = $('<img>').attr('src', `http://openweathermap.org/img/wn/${res.current.weather[0].icon}@2x.png` );
            let temp = $('<p>').addClass('card-text').text(`Temperature: ${res.current.temp}`);
            let humidity = $('<p>').addClass('card-text').text(`Humidity: ${res.current.humidity} %`);
            let windSpeed = $('<p>').addClass('card-text').text(`Wind Speed: ${res.current.wind_speed} MPH`);
            let uvIndex = $('<p>').addClass('card-text').text(`UV Index: ${res.current.uvi} `);
            let card = $('<div>').addClass('card');
            let cardBody = $('<div>').addClass('card-body');
            
            cityName.append(weatherIcon);
            cardBody.append(cityName, temp, humidity, windSpeed, uvIndex);
            card.append(cardBody);
            $('#today').append(card);


            let dailyName = $('<h4>').addClass('card-title').text(`${searchInput} (Today)`);
            let dailyIcon = $('<img>').attr('src', `http://openweathermap.org/img/wn/${res.daily[0].weather[0].icon}@2x.png`);
            let dailyTemp = $('<p>').addClass('card-text').text(`Temperature: ${res.daily[0].temp.day}`);
            let dailyHumidity = $('<p>').addClass('card-text').text(`Humidity: ${res.daily[0].humidity}%`);
            let dailyWindSpeed = $('<p>').addClass('card-text').text(`Wind Speed: ${res.daily[0].wind_speed}MPH`);
            let dailyUvIndex = $('<p>').addClass('card-text').text(`UV Index: ${res.daily[0].uvi}`);
            let dailyCard = $('<div>').addClass('card');
            let dailyCardBody = $('<div>').addClass('card-body');

            dailyName.append(dailyIcon)
            dailyCardBody.append(dailyName, dailyTemp, dailyHumidity, dailyWindSpeed, dailyUvIndex);
            dailyCard.append(dailyCardBody);
            $('#dayOne').append(dailyCard);


            let dailyName1 = $('<h4>').addClass('card-title').text(`${searchInput} (Tommorow)`);
            let dailyIcon1 = $('<img>').attr('src', `http://openweathermap.org/img/wn/${res.daily[1].weather[0].icon}@2x.png`);
            let dailyTemp1 = $('<p>').addClass('card-text').text(`Temperature: ${res.daily[1].temp.day}`);
            let dailyHumidity1 = $('<p>').addClass('card-text').text(`Humidity: ${res.daily[1].humidity}%`);
            let dailyWindSpeed1 = $('<p>').addClass('card-text').text(`Wind Speed: ${res.daily[1].wind_speed}MPH`);
            let dailyUvIndex1 = $('<p>').addClass('card-text').text(`UV Index: ${res.daily[1].uvi}`);
            let dailyCard1 = $('<div>').addClass('card');
            let dailyCardBody1 = $('<div>').addClass('card-body');

            dailyName1.append(dailyIcon1)
            dailyCardBody1.append(dailyName1, dailyTemp1, dailyHumidity1, dailyWindSpeed1, dailyUvIndex1);
            dailyCard1.append(dailyCardBody1);
            $('#dayTwo').append(dailyCard1);


            let dailyName2 = $('<h4>').addClass('card-title').text(`${searchInput} (Day 3)`);
            let dailyIcon2 = $('<img>').attr('src', `http://openweathermap.org/img/wn/${res.daily[2].weather[0].icon}@2x.png`);
            let dailyTemp2 = $('<p>').addClass('card-text').text(`Temperature: ${res.daily[2].temp.day}`);
            let dailyHumidity2 = $('<p>').addClass('card-text').text(`Humidity: ${res.daily[2].humidity}%`);
            let dailyWindSpeed2 = $('<p>').addClass('card-text').text(`Wind Speed: ${res.daily[2].wind_speed}MPH`);
            let dailyUvIndex2 = $('<p>').addClass('card-text').text(`UV Index: ${res.daily[2].uvi}`);
            let dailyCard2 = $('<div>').addClass('card');
            let dailyCardBody2 = $('<div>').addClass('card-body');

            dailyName2.append(dailyIcon2)
            dailyCardBody2.append(dailyName2, dailyTemp2, dailyHumidity2, dailyWindSpeed2, dailyUvIndex2);
            dailyCard2.append(dailyCardBody2);
            $('#dayThree').append(dailyCard2);


            let dailyName3 = $('<h4>').addClass('card-title').text(`${searchInput} (Day 4)`);
            let dailyIcon3 = $('<img>').attr('src', `http://openweathermap.org/img/wn/${res.daily[3].weather[0].icon}@2x.png`);
            let dailyTemp3 = $('<p>').addClass('card-text').text(`Temperature: ${res.daily[3].temp.day}`);
            let dailyHumidity3 = $('<p>').addClass('card-text').text(`Humidity: ${res.daily[3].humidity}%`);
            let dailyWindSpeed3 = $('<p>').addClass('card-text').text(`Wind Speed: ${res.daily[3].wind_speed}MPH`);
            let dailyUvIndex3 = $('<p>').addClass('card-text').text(`UV Index: ${res.daily[3].uvi}`);
            let dailyCard3 = $('<div>').addClass('card');
            let dailyCardBody3 = $('<div>').addClass('card-body');

            dailyName3.append(dailyIcon3)
            dailyCardBody3.append(dailyName3, dailyTemp3, dailyHumidity3, dailyWindSpeed3, dailyUvIndex3);
            dailyCard3.append(dailyCardBody3);
            $('#dayFour').append(dailyCard3);


            let dailyName4 = $('<h4>').addClass('card-title').text(`${searchInput} (Day 5)`);
            let dailyIcon4 = $('<img>').attr('src', `http://openweathermap.org/img/wn/${res.daily[4].weather[0].icon}@2x.png`);
            let dailyTemp4 = $('<p>').addClass('card-text').text(`Temperature: ${res.daily[4].temp.day}`);
            let dailyHumidity4 = $('<p>').addClass('card-text').text(`Humidity: ${res.daily[4].humidity}%`);
            let dailyWindSpeed4 = $('<p>').addClass('card-text').text(`Wind Speed: ${res.daily[4].wind_speed}MPH`);
            let dailyUvIndex4 = $('<p>').addClass('card-text').text(`UV Index: ${res.daily[4].uvi}`);
            let dailyCard4 = $('<div>').addClass('card');
            let dailyCardBody4 = $('<div>').addClass('card-body');

            dailyName4.append(dailyIcon4)
            dailyCardBody4.append(dailyName4, dailyTemp4, dailyHumidity4, dailyWindSpeed4, dailyUvIndex4);
            dailyCard4.append(dailyCardBody4);
            $('#dayFive').append(dailyCard4);




        });

    });
    
};

$('').on('click', e => {
    e.preventDefault();
    console.table(historyList);
})





// 5 day forecast logic: Looping data 5 times and getting the 8th index each time


