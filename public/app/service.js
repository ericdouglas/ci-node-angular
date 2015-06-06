(function() {
  
  'use strict';

  angular
    .module( 'jobApp' )
    .service( 'jobService', jobService );

  jobService.$inject = [
    '$resource'
  ];

  function jobService( $resource ) {

    var self = this;

    self.getJobs = function() {

      return $resource( 'api/jobs' ).query();

    };

  }

}());