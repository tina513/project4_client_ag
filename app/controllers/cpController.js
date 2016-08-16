'use strict';

(function cpController() {

	let CPController = function($routeParams, userFactory) {
    this.user = {};

    function init() {}

		this.changePassword = function(oldP, newP) {
			userFactory.changePassword(oldP, newP)
			.then(function(result) {
				// window.location.href = '#/userShow';
        // $('#sign-up-button').addClass('hide');
				// $('#log-in-button').addClass('hide');
        // $('#cp-button').removeClass('hide');
				// $('#sign-out-button').removeClass('hide');
			}, function(data, status, headers, config) {
				console.error(status);
			});
		};

    init();
  };

	CPController.$inject = ['$routeParams', 'userFactory'];

	angular.module('recipesApp').controller('cpController', CPController);

})();
