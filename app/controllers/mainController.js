(function mainControllerIIFE(){

  var MainController = function(recipesFactory, appSettings){
    var vm = this;
    vm.appSettings = appSettings;
    // vm.sortBy = "name";
    // vm.reverse = false;

    // All the recipes;
    vm.recipes= [];

    function init(){
      // Init the recipes from the factory
      // Get all the recipes from the backend
      recipesFactory.getRecipes()
      .then(function(result){
        var userId = simpleStorage.get('userId');
        var recipeArr = result.data.recipes;
        for(var i = 0; i < recipeArr.length; i++) {
          var obj = recipeArr[i];
          if (obj.user_id !== userId) {
            console.log("this is ",obj)
            vm.recipes.push(obj)
          }
        }
        // vm.recipes = result.data.recipes;
      }, function(data, status, headers, config){
        console.log("Error getting recipes from the remote api");
        alert("Error getting recipes from the remote api");
      });
    }

    // vm.doSort = function(propName){
    //   vm.sortBy = propName;
    //   vm.reverse = !vm.reverse;
    // };

    init();

  };

 MainController.$inject = ['recipesFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('recipesApp').controller('mainController', MainController);

})();
