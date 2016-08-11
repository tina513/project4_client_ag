(function customersAppIIFE(){
  var app = angular.module('customersApp', ['ngRoute', 'ngMessages']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/',
            {
              
            }
           )
      .otherwise({redirectTo: '/'});
  });

})();
