(function logInController() {

	var LogInController = function($routeParams, userFactory) {
    this.user = {};

    function init() {}

		this.logIn = function(email, password) {
			console.log("this is email", email);
			userFactory.logIn(email, password)
			.then(function(result) {
				console.log(result.data);
        simpleStorage.set('token', result.data.user.token);
				simpleStorage.set('userId', result.data.user.id);
				window.location.href = '#/user';
        $('#userButton').removeClass('hidden');
				$('#homeButton').removeClass('hidden');
				$('#logOutButton').removeClass('hidden');
				$('#signUpButton').addClass('hidden');
				$('#logInButton').addClass('hidden');
			}, function(data, status, headers, config) {
				console.error(status);
			});
		};

    init();
  };

	LogInController.$inject = ['$routeParams', 'userFactory'];

	angular.module('recipesApp').controller('logInController', LogInController);

})();
