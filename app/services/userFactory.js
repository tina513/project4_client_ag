(function userFactoryIIFE() {
    var UserFactory = function($http) {
      var userAPI = {};
      var host = 'https://recipehouse.herokuapp.com';
      //var host = 'http://localhost:3000';

      userAPI.signUp = function(email, password, passwordConfirmation) {
				return $http.post(host + '/sign-up/', { 'credentials': { 'email': email, 'password': password, 'password_confirmation': passwordConfirmation }});
			};

			userAPI.logIn = function(email, password) {
				return $http.post(host + '/sign-in/', { 'credentials': { 'email': email, 'password': password }});
			};

      userAPI.changePassword = function(userId, oldP, newP) {
        return $http.patch(host + '/change-password/' + userId, { 'passwords': { old: oldP, new: newP }}, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}});
      };

      userAPI.signOut = function(userId) {
        return $http.delete(host + '/sign-out/' + userId, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}});
      };
      return userAPI;
    };

    UserFactory.$inject = ['$http'];

    angular.module('recipesApp').factory('userFactory', UserFactory);
})();
