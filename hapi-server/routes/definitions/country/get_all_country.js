'use strict';

var Country = require('../../../models/country');

module.exports = {
  description: 'Form auto completion',
  tags:['notes'],
  handler: function(request, reply){
    Country.all(request.params.country, function(err, country){
      if(country){
        reply({Country:country}).code(200);
      }else{
        reply().code(400);
      }
    });
  }
};
