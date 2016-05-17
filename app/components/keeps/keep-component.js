(function(){
	angular.module('keepr')
		.component('keepComponent', {
			bindings:{
				keep: '<'
			},
			templateUrl: 'app/components/keeps/keep.html',
			controller: KeepController
		})
		
		function KeepController(){
			
		}
		
}())