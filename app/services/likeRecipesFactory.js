(function likeRecipesFactoryIIFE(){

  var likeRecipesFactory = function($http){
    var likeRecipesAPI = {};
    var host = 'https://recipehouse.herokuapp.com';
     //var host = 'http://localhost:3000';

    likeRecipesAPI.getRecipes = function(){
      return  $http.get(host+'/like_recipes/', { withCredentials: false });
    };

    likeRecipesAPI.getRecipe = function(recipeId){
      return  $http.get(host+'/like_recipes/' + recipeId, { withCredentials: false });
    };

    likeRecipesAPI.createRecipe = function(recipeId, userId) {
      return $http.post(host+'/like_recipes/', { 'like_recipes': {'recipe_id': recipeId, 'user_id': userId}}, {headers: { 'Authorization': 'Token token=' + simpleStorage.get('token')}}, { withCredentials: false });
    };

    return likeRecipesAPI;
  };

  likeRecipesFactory.$inject = ['$http'];

  angular.module('recipesApp').factory('likeRecipesFactory', likeRecipesFactory);
})();
