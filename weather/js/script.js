const API_KEY = '';
const URL = 'http://api.openweathermap.org/data/2.5/weather';

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
            }
        });
    })
});
