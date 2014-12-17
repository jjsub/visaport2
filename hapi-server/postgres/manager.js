'use strict';
//use the postgres npm module
/*
The purpose of this file is to be able to connect to
the postgres database of your choice. Meaning, process.env.DATABASE_URL
can point to ANY Postgre database
*/
var pg = require('pg');

//in order to use this anywhere, we need to export out to everybody in NodeJS
/*
1) What SQL query are we running?
2) What variables are putting into that SQL query ($1, $2, $3)
Ex Function Call. pg.query('select * from notes where id = $1', [user.noteId], cb);
3) Callback with the error if there was one and the result of the query
*/
exports.query = function(sql, params, cb){

  //Connect to the Postgres database in the DATABASE_URL
  //It returns a callback that returns 3 things
  //1) is the error if there was one
  //2) client, being the thing enables SQL queries
  //3) is the callback we use when we're DONE making that query
  pg.connect(process.env.DATABASE_URL, function(err, client, done){
    if(err){return cb(err);}

    /* CONNECTION POOL DEBUGGING */
    var pool = pg.pools.getOrCreate(process.env.DATABASE_URL);
    console.log('POOLS:', Object.keys(pg.pools.all), 'SIZE:', pool.getPoolSize(), 'AVAILABLE:', pool.availableObjectsCount());

    //client is what actually MAKES the SQL query
    //params are the SQL queries that come from the models (eg, notes, users)
    client.query(sql, params, function(err, results){
      done();
      cb(err, results);
    });
  });

};
