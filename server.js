var express  = require( 'express' );
var jobModel = require( './models/Job' );
var config   = require( './config.json' );
var jobsData = require( './jobs-data' );

var app = express();

app.set( 'views', __dirname );
app.set( 'view engine', 'jade' );

app.use( express.static( __dirname + '/public' ));

app.get( '/api/jobs', function( req, res ) {

  jobsData
    .findJobs()
    .then( function( collection ) {

      res.send( collection );

    });

});

app.get( '*', function( req, res ) {
    
  res.render( 'index' );
    
});

jobsData.connectDB( config.mongolab )
  .then( function() {

    console.log( 'connected to mongodb successfully' );

  });

app.listen( process.env.PORT || 3000 );