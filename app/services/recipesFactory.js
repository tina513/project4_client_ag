(function recipesFactoryIIFE(){


  var recipesFactory = function($http){
    var recipesAPI = {};
    var host = 'https://recipehouse.herokuapp.com';
    //var host = 'http://localhost:3000';

    recipesAPI.getRecipes = function(){
      return  $http.get(host+'/recipes/', { withCredentials: true });
    };

    recipesAPI.getRecipe = function(recipeId){
      return  $http.get(host+'/recipes/' + recipeId, { withCredentials: true });
    };

    recipesAPI.createRecipe = function(data){
      return $http.post(host+'/recipes/', { 'recipe': data}, {headers: { 'Authorization': 'Token token=' + simpleStorage.get('token')}}, { withCredentials: true });
    };

    recipesAPI.deleteRecipe = function(recipeId){
      return $http.delete(host+'/recipes/' + recipeId, {headers: { Authorization: 'Token token=' + simpleStorage.get('token')}}, { withCredentials: true });
    };

    return recipesAPI;
  };

  recipesFactory.$inject = ['$http'];

  angular.module('recipesApp').factory('recipesFactory', recipesFactory);
})();
