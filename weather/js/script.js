const API_KEY = '';
const URL = 'http://api.openweathermap.org/data/2.5/weather';

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
                $('.weather-result').html(table);
            }
        });
    })
});
