(function() {
	'use-strict';
	angular
		.module("dining-room.restaurant")
		.factory("Restaurant", Restaurant);

		Restaurant.$inject = ["$http"];
		function Restaurant($http){
			var url = "http://localhost:3000/api/restaurants";

			return{
				get: get,
				getMenu: getMenu
			};

			function get(params){
				return $http.get(url, {"params": params}).then(function(response){
					return response.data;
			});
		}
		function getMenu(id) {
			return $http.get(url + "/" + id + "/menus").then(function(response){
				return response.data;
			});
		}
	}
})();