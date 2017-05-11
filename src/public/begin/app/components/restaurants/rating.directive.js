(function() {
	'use-strict';

	angular
		.module('dining-room.restaurant')
		.directive("rating", rating);


		function rating() {
			return{
				restrict: 'A',
				templateUrl: "app/components/restaurants/rating.html",
				scope: {
					rating: "@", 
					ratingIconOn: "@", 
					ratingIconOff: "@"
				},
				link: function(scope) {
					scope.icons = [false, false, false, false, false];

					for(var i = 0; i < scope.rating; i++){
						scope.icons[i] = true;
					}
				}
	 		};     
		}
})();