(function () {

	angular.module('keepr')
		.component('membersComponent', {
			templateUrl: 'app/components/members/members.html',
			controller: MembersController
		})


		function MembersController(MemberService, $state) {
		var mc = this;
		this.$onInit = function () {
			if (!MemberService.getAuth()) {
				return $state.go('home')
			}
			mc.member = MemberService.getMember();
		}

		}


} ())