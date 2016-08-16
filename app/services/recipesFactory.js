(function recipesFactoryIIFE(){

  // Create a recipes factory
  var recipesFactory = function($http){
    var recipesAPI = {};

    recipesAPI.getRecipes = function(){
      // allow access to the list of recipes
      return  $http.get('http://localhost:3000/recipes');
    };

    recipesAPI.getRecipe = function(recipeId){
      return  $http.get('http://localhost:3000/recipes/' + recipeId);
    };

    recipesAPI.createRecipe = function(data){
      return $http.post('http://localhost:3000/recipes/', { 'recipe': data}, {headers: { 'Authorization': 'Token token=' + simpleStorage.get('token')}});
    };

    return recipesAPI;
  };

  recipesFactory.$inject = ['$http'];

  angular.module('recipesApp').factory('recipesFactory', recipesFactory);
})();
