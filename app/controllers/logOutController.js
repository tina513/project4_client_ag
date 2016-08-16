(function logOutController() {

	var LogOutController = function($routeParams) {
    this.user = {};

    function init() {}

		this.logOut = function() {
      simpleStorage.flush();
      window.location.href = '#/';
			console.log("what's up?");
			$('#userButton').addClass('hidden');
			$('#homeButton').addClass('hidden');
      // $('#login-button').removeClass('hide');
      $('#logOutButton').addClass('hidden');
    };

    init();
  };

	LogOutController.$inject = ['$routeParams'];

	angular.module('recipesApp').controller('logOutController', LogOutController);

})();
