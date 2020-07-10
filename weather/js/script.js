const API_KEY = '07ddf0059c262491e6a6255260e8c44e';
const URL = 'http://api.openweathermap.org/data/2.5/weather';

const CITY_PICTURES = {
    "Barcelona": {
        day: {sunny:"barcelona.jpg",
              rain:"barcelona_rain.jpg"},
        night: "night_barcelona.jpg"
    },
    "Voronezh": {
        day: {sunny:"voronezh.jpg",
              rain:"voronezh_rain.jpg"},
        night: "voronezh_night.jpg"
    },
    "London": {
        day: {sunny:"london.jpg",
              rain:"london_rain.jpg"},
        night: "london_night.jpg"
    },
    "Moscow": {
        day: {sunny:"moscow.jpg",
              rain:"moscow_rain.jpg"},
        night: "moscow_night.jpg"
    },

    "Berlin": {
        day: {sunny:"berlin.jpg",
              rain:"berlin_rain.jpg"},
        night: "berlin_night.jpg"
    },

    "Amsterdam": {
        day: "amsterdam.jpg",
        night: "amsterdam_night.jpg"
    }

};

const WEATHER_FIELDS = [
    {
        name: 'City',
        weatherObject: 'name'
    },
    {
        name: 'Temp.',
        suffix: '&degC',
        weatherObject: 'main.temp'
    },
    {
        name: 'Feel',
        suffix: '&degC',
        weatherObject: 'main.feels_like'
    },
    {
        name: 'Wind',
        suffix: ' m/sec',
        weatherObject: 'wind.speed'
    },
    {
        name: 'Humidity',
        suffix: '%',
        weatherObject: 'main.humidity'
    },
    {
        name: 'Pressure',
        suffix: ' kPa',
        weatherObject: 'main.pressure'
    }
];

$(document).ready(() => {
    $('form').submit(event => {
        event.preventDefault();
        console.log(event);

        $.ajax({
            method: 'get',
            url: URL,
            data: {
                q: $('select').val(),
                units: 'metric',
                appid: API_KEY,
            },
            success: (data) => {
                console.log(data);
                let table = '';
                WEATHER_FIELDS.forEach(field => {
                    table += `<div class = "row">` +
                        `             <div class="name col-12 col-md-4">` +
                        `                ${field.name}` +
                        `             </div>` +
                        `             <div class="col-12 col-md-8">` +
                        `                ${eval('data.' + field.weatherObject) + (field.suffix ? field.suffix : '') }                         ` +
                        `             </div>` +
                        `          </div>`
                });

                const rainOrSun=Math.random()>=0.5
                    ?'sunny'
                    :'rain';

                const dayOrNight = Math.random() >= 0.5
                    ? 'day'
                    : 'night';

                const cityPicture = CITY_PICTURES[data.name][dayOrNight][rainOrSun]
                    ? CITY_PICTURES[data.name][dayOrNight][rainOrSun]
                    : CITY_PICTURES[data.name][dayOrNight];
                  //  :'4292857393.jpeg';
                console.log(data.name);

                $('body').css("background-image", `url('images/${cityPicture}')`);
                console.log(cityPicture);
                $('.weather-result').html(table);
            }
        });
    })
});
