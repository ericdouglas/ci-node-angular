(function() {
  
  'use strict';

  angular
    .module( 'jobApp' )
    .controller( 'jobController', jobController );

  jobController.$inject = [
    'jobService'
  ];

  function jobController( jobService ) {

    var vm = this;

    ///////////// Properties
    vm.title = 'JobFinder';
    vm.jobs  = jobService.getJobs();

    ///////////// Public Methods

    ///////////// Private Methods

    ///////////// Methods Declarations

  }

}());