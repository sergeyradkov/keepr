(function(){
	angular.module('keepr')
		.component('keepComponent', {
			bindings:{
				keep: '<',
				onKeepClick: '<'
			},
			templateUrl: 'app/components/keeps/keep.html',
			controller: KeepController
		})
		
		function KeepController(){
			
		}
		
}())