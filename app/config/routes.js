(function(){
	angular.module('keepr')
		.config(function($stateProvider, $urlRouterProvider){
			
			$stateProvider
			
				.state('home', {
					url: '',
					template: '<div class="content"><keeps-component></keeps-component></div>'
				})
				
				.state('auth', {
					abstract: true,
					template: '<div class="content"><ui-view></ui-view></div>',
					resolve: {
						isAuthed: function(MemberService, $state){
							if(!MemberService.getAuth()){
								return $state.go('home')
							}
						}
					}
				})
				.state('auth.members', {
					url: '/members',
					template: '<members-component></members-component>'
				})
				
					
	})
		
}())