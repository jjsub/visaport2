'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

function Country(){
}

Country.all = function(country, cb){
  var Country = mongoose.model('Country', new Schema(), country);
  Country.find(country).find().toArray(cb);
};

Country.findByName = function(query, cb){
  var Country = mongoose.model('Country', new Schema(), query.countryFrom);
    Country.findOne({Country: query.countryTo}, cb);
};

module.exports = Country;
