(function signUpController() {

	var SignUpController = function($routeParams, userFactory) {
    this.user = {};

    function init() {}

		this.signUp = function(email, password, passwordConfirmation) {
			userFactory.signUp(email, password, passwordConfirmation)
			.then(function(result) {
				console.log(result);
				// simpleStorage.set('userId', result.data.userId);
				// window.location.href = '#/userShow';
        // $('#sign-up-button').addClass('hide');
				// $('#log-in-button').removeClass('hide');
        // $('#cp-button').addClass('hide');
				// $('#sign-out-button').addClass('hide');
			}, function(data, status, headers, config) {
				console.error(status);
			});
		};

    init();
  };

	SignUpController.$inject = ['$routeParams', 'userFactory'];

	angular.module('recipesApp').controller('signUpController', SignUpController);

})();
