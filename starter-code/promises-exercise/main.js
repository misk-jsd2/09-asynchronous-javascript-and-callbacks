'use strict';
  $(document).ready(function () {

      $('#btnGetWeather').click(function () {

      var resultElement = $('#resultDiv');

      resultElement.html('');

      var requestData = $('#txtCity').val() + ',' + $('#txtCountry').val();

      $.ajax({

        url: 'http://api.openweathermap.org/data/2.5/weather',

        method: 'get',

        // imperial units means fahrenhite temps
        data: { q: requestData, appid:'c946f292646b91c96f8010836079802d', units:'imperial'},

        dataType: 'json',

        success: function (response) {

          if (response.message != null) {

          resultElement.html(response.message);

          } else {

            resultElement.html('Temp: ' + response.main.temp + '<br/>' + 'Weather: ' + response.weather[0].main + '<br/>' + 'Description: ' + response.weather[0].description);

          }

        },

        error: function (err) {

          alert(err);

        }

      });

  });

});
