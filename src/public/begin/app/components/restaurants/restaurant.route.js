(function() {
	'use-strict';
	angular
		.module("dining-room.restaurant")
		.config(config);

		config.$inject = ["$stateProvider"];
		function config($stateProvider){
			$stateProvider
				.state("main.restaurants", {
					url: "/restaurants/:cuisine",
					views: {
						"content@": {
							templateUrl: "app/components/restaurants/restaurant-list.html",
							controller: "RestaurantListController",
							resolve: {
								restaurants: retrieveRestaurants
							}
						}
					}
				});
				retrieveRestaurants.$inject = ["$stateParams", "Restaurant"]
				function retrieveRestaurants($stateParams, Restaurant) {
					return Restaurant.get({"filter": {"cuisine": $stateParams.cuisine}, "pageSize":12, sort:"rating", sortDirection: "desc"});
				}

				retrieveMenu.$inject = ["$stateParams", "Restaurant"];
				function retrieveMenu($stateParams, Restaurant){
					return Restaurant.getMenu($stateParams.id);
				}
		}
})();