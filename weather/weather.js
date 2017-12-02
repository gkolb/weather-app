const request = require('request');
const config = require('../api');

const myKey =  config.config.DARKSKY_KEY;

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${myKey}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
    });
    } else {
      callback('Unable to obtain weaather');
    }
  });
};

module.exports.getWeather = getWeather