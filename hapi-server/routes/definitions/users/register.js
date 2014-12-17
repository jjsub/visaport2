'use strict';

var User = require('../../../models/user');

module.exports = {
  description: 'Register a User',
  tags:['users'],
  auth: false,
  handler: function(request, reply){
    User.register(request.payload, function(err){
      reply().code(err ? 400 : 200);
    });
  }
};
