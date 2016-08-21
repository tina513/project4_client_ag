(function recipesAppIIFE() {
    var app = angular.module('recipesApp', ['ngRoute', 'ngMessages']);

    app.config(function($routeProvider, $httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $routeProvider
            .when('/', {
                controller: 'mainController as mainCtrl',
                templateUrl: 'app/views/mainView.html'
            })
            .when('/signup', {
                controller: 'signUpController as signUpCtrl',
                templateUrl: 'app/views/signUpView.html'
            })
            .when('/login', {
                controller: 'logInController as logInCtrl',
                templateUrl: 'app/views/logInView.html'
            })
            // .when('/cp', {
            //     controller: 'cpController as cpCtrl',
            //     templateUrl: 'app/views/cpView.html'
            // })
            .when('/logout', {
                controller: 'logOutController as logOutCtrl',
                templateUrl: 'app/views/logOutView.html'
            })
            .when('/home', {
              controller: 'mainController as mainCtrl',
              templateUrl: 'app/views/mainView.html'
            })
            .when('/user', {
                controller: 'userRecipeController as urCtrl',
                templateUrl: 'app/views/urView.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

})();
