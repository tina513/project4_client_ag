(function mainControllerIIFE(){

  var MainController = function(recipesFactory, appSettings){
    var vm = this;
    vm.appSettings = appSettings;

    vm.recipes= [];

    function init(){
      recipesFactory.getRecipes()
      .then(function(result){
        var userId = simpleStorage.get('userId');
        var recipeArr = result.data.recipes;
        console.log("this is result", result.data);
        for(var i = 0; i < recipeArr.length; i++) {
          var obj = recipeArr[i];
          if (obj.user_id !== userId) {
            console.log("this is ",obj)
            vm.recipes.push(obj)
          }
        }
      }, function(data, status, headers, config){
        console.log("Error getting recipes from the remote api");
        alert("Error getting recipes from the remote api");
      });

      // $scope.addLikeRecipe = function(recipeId) {
      //     console.log("this is recipe id: ", recipeId);
      //     var userId = simpleStorage.get('userId');
      //     console.log("this is user id: ", userId);
      //     // likeRecipesFactory.createRecipe(recipeId, userId)
      //     //     .then(function(result) {
      //     //         console.log("success", result.data);
      //     //     }, function(data, status, headers, config) {
      //     //         console.error(status);
      //     //     });
      // };

    };


    init();

  };

 MainController.$inject = ['recipesFactory', 'appSettings'];

 angular.module('recipesApp').controller('mainController', MainController);

})();
