(function recipesFactoryIIFE(){


  var recipesFactory = function($http){
    var recipesAPI = {};
    var host = 'https://recipehouse.herokuapp.com';
    // var host = 'http://localhost:3000';

    recipesAPI.getRecipes = function(){

      return  $http.get(host);
    };

    recipesAPI.getRecipe = function(recipeId){
      return  $http.get(host+'/recipes/' + recipeId);
    };

    recipesAPI.createRecipe = function(data){
      return $http.post(host+'/recipes/', { 'recipe': data}, {headers: { 'Authorization': 'Token token=' + simpleStorage.get('token')}});
    };

    recipesAPI.deleteRecipe = function(recipeId){
      return $http.delete(host+'/recipes/' + recipeId, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}});
    };

    return recipesAPI;
  };

  recipesFactory.$inject = ['$http'];

  angular.module('recipesApp').factory('recipesFactory', recipesFactory);
})();
