'use strict';

var Country = require('../../../models/country');

module.exports = {
  description: 'Find a country',
  tags:['notes'],
  handler: function(request, reply){
    Country.findByName(request.body, function(err, country){
      reply(country).code(200);
    });
  }
};