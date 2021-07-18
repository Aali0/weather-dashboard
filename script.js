$(document).ready(() => {
    // Search button event listener
    $('#search-button').on('click', () => {
        let searchValue = $('#search-value').val();



        // Clear input box
        $('#search-value').val('');

        weatherSearch(searchValue);
    });

    $('.history').on('click,', 'li', () => {
        weatherSearch($(this).text());
    });

    // Making rows

    const makeRow = (text) => {
        let li = $('<li>').addClass('list-group-item list-group-item-action').text(text);
        $('.history').append(li);
    }


    // Weather search function

    const weatherSearch = (searchValue) => {
        $.ajax({
            type: 'GET',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial`,
            dataType: 'json',
            success: function(data) {
                // history link for this search
                if (history.indexOf(searchValue) === -1) {
                    history.push(searchValue);
                    window.localStorage.setItem('history', JSON.stringify(history));

                    makeRow(searchValue);
                }
                // clear old content
                $('#today').empty();

                // create html content for weather
                let title = $('<h3>').addClass('card-title').text(data.name + " (" + new Date().toLocaleDateString() + ")");
                let card = $('<div').addClass('card');
                let wind = $('<p>').addClass('card-text').text('Wind Speed: ' + data.wind.speed + ' MPH');
                let humid = $('<p>').addClass('card-text').text('Humidity: ' + data.main.humidity + '%');
                let temp = $('<p>').addClass('card-text').text('Temperature: ' + data.main.temp + ' °F');
                let cardBody = $('<div>').addClass('card-body');
                let img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

                // merge and add to the page
                title.append(img);
                cardBody.append(title, temp, humid, wind);
                card.append(cardBody);
                $('today').append(card);

                // call follow-up api endpoints
                getForecast(searchValue);
                getUVIndex(data.coord.lat, data.coord.lon);
            }
        });
    }
    
































































});