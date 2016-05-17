(function(){
	angular.module('keepr')
		.component('keepsComponent', {
			bindings:{
				showMemberKeeps: '<'
			},
			templateUrl: 'app/components/keeps/keeps.html',
			controller: KeepsController
		})
		
		function KeepsController($state, FBREF, $scope, $firebaseArray, MemberService){
			var kc = this;
			if(!kc.member){
				kc.member = MemberService.getMember()
			}

			kc.keeps = $firebaseArray(new Firebase(FBREF + 'keeps'));
			
			kc.keeps.$loaded(function(data){
				if(kc.showMemberKeeps){
					//filter the kc.keeps array 
					kc.keeps = data.filter(function(keep){
						if(keep.author.id == kc.member.id){
							return keep
						}
					})
				}
				
			})
			
				
			
			

			console.log(kc.member); //'if you have a member filter the keeps to show only your own')
			//Tie Keeps to firebase
/*			kc.keeps = [{
				title: 'Learn to Draw',
				imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
				body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
				keepCount: 100,
				shareCount: 300,
				viewCount: 900,
				author: 'JimyJonJones'
			}] */
		}
		
}())