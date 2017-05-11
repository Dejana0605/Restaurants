(function() {
	'use-strict';
	angular
		.module("dining-room.restaurant")
		.controller("MenuController", MenuController);

	MenuController.$inject = ["$scope", "menu", "restaurant"];
	function MenuController($scope, menu, restaurant){
		$scope.menu = menu.results[0];
		$scope.restaurant = restaurant;
	}
})();