const request = require('postman-request');
request('http://api.weatherstack.com/current?access_key=2d3c1b2c88901374235e47d1b816c0ff&query=19.266999%-103.736250', function(error, response, body) {
    if (error != null) {
        console.log('error:', error);
    } else {
        request('http://api.airvisual.com/v2/nearest_city?lat=19.266999&lon=103.736250&key=63db55bf-2eb5-4e2c-91e7-a54db96b90d7', function(error1, response2, body2) {
            if (error1 != null) {
                console.log('error:', error1);
            } else {
                let eljson = JSON.parse(body2);
                console.log(eljson)

                let eljson1 = JSON.parse(body);
                console.log('Temperatura' + '\n' + eljson1.current.temperature)
                console.log('Descripción del tiempo' + '\n' + eljson1.current.weather_descriptions)
                console.log('Latitud' + '\n' + eljson1.location.lat)
                console.log('Longitud' + '\n' + eljson1.location.lon)
                console.log('Contaminación' + '\n' + eljson.data.current.pollution.aqius)
                console.log('Calidad del aire' + '\n' + eljson.data.current.pollution.aqicn)
            }
        });
    }
});