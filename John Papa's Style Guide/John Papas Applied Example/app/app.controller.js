(function() {

    'use strict';

    angular
        .module('myApp')

        /* Creating a controller using the Controller As method */
        .controller('controllers', controllers)

        .controller('SessionsController', SessionsController)

        .controller('AvengersController', AvengersController)

		function controllers($scope, $log) {

			//Set this to vm to represent ViewModel and also prevent jshint warnings by including the comment below.
			/* jshint validthis: true */
    		var vm = this;

    		//Create an empty array
			vm.original = [''];
			
			//A counting function
			vm.count = 0;
			vm.countUp = function(){
				vm.count += 1;
			}

		    //Apply a save function to add a value to the array and replace it every time 'Save' is clicked
		  	vm.save = function() {	

		  		if (!isNaN(vm.name)) {
		  			throw alert('Sorry, not a valid name. Please try again.');
		  		} else {
		  			vm.original.push(vm.name);
			 		if (vm.original.length > 2) {
			 			vm.original.shift();
			 		}
		  		}					 				 		

		 		vm.previous = vm.original[0];
		 		vm.current = vm.original[1];

			}

			/* Watch Functions */

			//A watch function to see when the name changes
            $scope.$watch(
                function () {
                    return( vm.current );
                },
                function ( newValue, oldValue ) {
                	console.log( "Old value was:", oldValue );
                    console.log( "New value was:", newValue );
                }
            )

            //A watch function to watch the counter function
            $scope.$watch(
                function () {
                    // Return the "result" of the watch expression.
                    return( vm.count );
                },
                function ( newValue, oldValue ) {
                    console.log( "fn( vm.count ):", oldValue );
                    console.log( "fn( vm.count ):", newValue );
                }
            );		

			
			
		}

		/* 4.4 Bindable Members Up Top */
		/* recommended */
		function SessionsController($log, sessionDataService) {
			var vm = this;
			vm.gotoSession = gotoSession;
			vm.refresh = sessionDataService.refresh;
			vm.search = search;
			vm.sessions = [];
    		vm.title = 'Sessions';

			function gotoSession() {
			 	$log.info('Executed gotoSession()');
			}

			function search() {
			   	$log.info('Executed search()');
			}
		}

		/* 4.5 Function Declarations to Hide Implementation Details
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/
		function AvengersController( avengersService, logger) {
		    var vm      = this;
		    vm.avengers = [];
		    vm.title    = 'Get the Avengers and log the retrieval';		    

		    vm.active = function activate() {
		        retrieveAvengers().then(function() {
		        	logger.info('Activated Avengers View');
		        });
		    }

		    function retrieveAvengers() {
		    	vm.avengers = avengersService.getAvengers();
		    	//activate();                
            }
		}
})();