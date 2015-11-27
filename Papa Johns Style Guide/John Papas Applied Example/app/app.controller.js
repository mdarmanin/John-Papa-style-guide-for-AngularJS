(function() {

    'use strict';

    angular
        .module('myApp')

        /* Creating a controller using the Controller As method */
        .controller('controllerAsMethod', controllerAsMethod);

		function controllerAsMethod($scope, $log) {
			//Set this to vm to represent ViewModel and also prevent jshint warnings by including the comment below.

			/* jshint validthis: true */
    		var vm = this;

    		//Adding the various descriptions
    		vm.array4 = [
    			'4.1 Using the controller as Syntax.',
    			'4.2 '
    		]

    		//Create an empty array
			vm.original = [''];

		    //Apply a save function to add a value to the array and replace it every time 'Save' is clicked
		  	vm.save = function() {
		 		vm.original.push(vm.name);
		 		if (vm.original.length > 2) {
		 			vm.original.shift();
		 		}		 		

		 		vm.newOriginal = vm.original[0];

		 		vm.current = vm.name;

		 		$scope.$watch('vm.original', function(current, original) {
		 			original =  vm.newOriginal;
					current = vm.current;
					if(original == '') {
						console.log('Not possible to compare, no inital name present');
					} else if (original !== current) {
			        	$log.info('Names are not the same');
			        } else {
			        	$log.info('Names are the same');
			        }
			    });
			}

			

		}

})();