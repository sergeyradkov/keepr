(function () {

	angular.module('keepr')
		.component('membersComponent', {
			templateUrl: 'app/components/members/members.html',
			controller: MembersController
		})


		function MembersController(MemberService, $state, FBREF, $scope, $firebaseArray) {
		var mc = this;
		this.$onInit = function () {
			if (!MemberService.getAuth()) {
				return $state.go('home')
			}
			mc.member = MemberService.getMember();
			}	
		
		
		var publicRef = new Firebase(FBREF + 'keeps');
        mc.keeps = $firebaseArray(publicRef);

		$scope.addKeep = function (newKeep) {
			debugger
			newKeep.author = mc.member;
			newKeep.keepCount =  0;
			newKeep.shareCount = 0;
			newKeep.viewCount = 0;
			mc.keeps.$add(newKeep);
			mc.newKeep = null;
		}
		mc.addVault = function(vault){
			
			var vaults = $firebaseArray(new Firebase(FBREF + 'users/' + mc.member.id+ '/vaults'));
			vaults.$add(vault);
		}
		mc.toogleView = function(viewName){
			if(mc.show == viewName){
				mc.show = 'keeps'
			} else {
				mc.show = viewName;
			}
		}
		
		
	}

} ())