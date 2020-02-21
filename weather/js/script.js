$(document).ready(function () {

    getWeather();
    console.log("ok -1");
});

let getWeather = function (APIKEY, city, units) {

    $("weather-form").submit(function (event) {
        event.preventDefault();

        let url = "http://api.openweathermap.org/data/2.5/weather";
        const APPIKEY = "daf7d567a6b39bbce964fa94e1a04bfc";
        let city = "Berlin";
        let units = "metric";
        const form = $(this);

        $.ajax({
            url: url,
            method: get,
            headers: {
                city: city,
                units: units,
                appid: APPIKEY
            },
            // data: $('form#myForm').serialize(),
            success: function (data) {
                //
            }
        });
    });
    console.log("ok-2");
};
