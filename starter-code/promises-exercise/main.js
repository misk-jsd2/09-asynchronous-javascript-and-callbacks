'use strict';
(function() {
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather/?units=metric";
  var userInput = 'Riyadh';
  var appid = '1b200fe2ac60cb6acd29571cf2f0b34d';

  $.ajax({
    url: weatherUrl,
    type: 'GET',
    data: {
      q: userInput,
      appid: appid
    },
    success: function(response){
      console.log(response)
    }
  })
})()