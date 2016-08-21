(function signUpController() {

	var SignUpController = function($routeParams, userFactory) {
    this.user = {};

    function init() {}

		this.signUp = function(email, password, passwordConfirmation) {
			userFactory.signUp(email, password, passwordConfirmation)
			.then(function(result) {
			}, function(data, status, headers, config) {
				console.error(status);
			});
		};

    init();
  };

	SignUpController.$inject = ['$routeParams', 'userFactory'];

	angular.module('recipesApp').controller('signUpController', SignUpController);

})();
