'use strict';

(function cpController() {

	let CPController = function($routeParams, userFactory) {
    this.user = {};

    function init() {}

		this.changePassword = function(oldP, newP) {
			userFactory.changePassword(oldP, newP)
			.then(function(result) {
			}, function(data, status, headers, config) {
				console.error(status);
			});
		};

    init();
  };

	CPController.$inject = ['$routeParams', 'userFactory'];

	angular.module('recipesApp').controller('cpController', CPController);

})();
