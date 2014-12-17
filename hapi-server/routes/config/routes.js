'use strict';
//this where HTTP requests come through
//They're in the form of GET, POST, PUT, DELETE verbs
/*
 To make a new route, simply supply which verb you're using. A path
 for that verb to run, a controller function to run when that path
 is hit.
*/
module.exports = [
  {method: 'get',
   path: '/{param*}', //request.params in the controller
   config: require('../definitions/static/angular')},

  {method: 'post',
   path: '/register',
   config: require('../definitions/users/register')},

  {method: 'post',
   path: '/login',
   config: require('../definitions/users/login')},

  {method: 'delete',
   path: '/logout',
   config: require('../definitions/users/logout')},

  {method: 'post',
   path: '/getCountry',
   config: require('../definitions/country/get_country')},

  {method: 'get',
   path: '/allCountry/{country}',
   config: require('../definitions/country/get_all_country')}

];

