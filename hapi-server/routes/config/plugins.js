'use strict';

//exports an object that contains configuration information about
//the plugins that hapi uses
module.exports = [
  {
    register: require('good'),
    options: {
      reporters: [{
        reporter: require('good-console'), //console to your command line
        args: [{log: '*', request: '*'}]
      }]
    }
  },
  {
    register: require('lout') //API documentation (Go to http://localhost:PORT/docs)
  },
  {
    register: require('hapi-auth-cookie') //hapi cookie for user authentication
  }
];
