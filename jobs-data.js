var mongoose = require( 'mongoose' );
var Promise  = require( 'bluebird' );

var Job = mongoose.model( 'Job' );

var jobs = [
  {
    title : 'Sales Person',
    description : 'you will fight dragons'
  },
  {
    title : 'Accoutant',
    description : 'you will use the keyboard'
  },
  {
    title : 'Programmer',
    description : 'you will be mindlessly typing for...'
  },
  {
    title : 'Axe Maker',
    description : 'We need many axes made... so many...'
  }
];

var findJobs = function( query ) {

  return Promise.cast( Job.find( query ).exec());

};

exports.findJobs = findJobs;

exports.connectDB = Promise.promisify( mongoose.connect, mongoose );

var createJob = Promise.promisify( Job.create, Job );

exports.seedJobs = function() {

  return findJobs( {} )
    .then( function( collection ) {

      if ( collection.length === 0 ) {

        return Promise.map( jobs, function( job ){

          return createJob( job );

        });

      }

    });

};

