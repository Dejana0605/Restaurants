(function() {
	'use-strict';

	angular
		.module("dining-room.core")
		.config(config);

		config.$inject = ["$stateProvider", "$urlRouterProvider"];
		function config($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise("/homepage");

			$stateProvider
				.state("main", {
					abstract: true, 
					views: {
						"header":{
							templateUrl: "app/components/core/header.html"
						},
						"sidebar": {
							templateUrl: "app/components/core/navbar.html"
						}
					}
				})
				.state("main.homepage", {
					url: "/homepage",
					views: {
						"content@": {
							templateUrl: "app/components/core/homepage.html"
						}
					}
				})
				.state("main.about", {
					url: "/about", 
					views: {
						"content@": {
							templateUrl: "app/components/core/about.html"
						}
					}
				});
			}
})();