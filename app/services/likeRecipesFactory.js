(function likeRecipesFactoryIIFE(){

  // Create a recipes factory
  var likeRecipesFactory = function($http){
    var likeRecipesAPI = {};

    likeRecipesAPI.getRecipes = function(){
      // allow access to the list of recipes
      return  $http.get('http://localhost:3000/like_recipes');
    };

    likeRecipesAPI.getRecipe = function(recipeId){
      return  $http.get('http://localhost:3000/like_recipes/' + recipeId);
    };

    return likeRecipesAPI;
  };

  likeRecipesFactory.$inject = ['$http'];

  angular.module('recipesApp').factory('likeRecipesFactory', likeRecipesFactory);
})();
