(function userRecipeControllerIIFE() {

    var UserRecipeController = function($scope, likeRecipesFactory, recipesFactory, appSettings) {
        var vm = this;
        vm.appSettings = appSettings;
        // vm.sortBy = "name";
        // vm.reverse = false;

        // All the recipes;
        vm.likeRecipes = [];
        $scope.userRecipes = [];

        function init() {
            // Init the recipes from the factory
            // Get all the recipes from the backend

            likeRecipesFactory.getRecipes()
                .then(function(result) {
                    var userId = simpleStorage.get('userId');
                    var likeArr = result.data.like_recipes;
                    for (var i = 0; i < likeArr.length; i++) {
                        var obj = likeArr[i];
                        if (obj.user_id === userId) {
                            console.log("this is ", obj)
                            vm.likeRecipes.push(obj)
                        }
                    }
                    // vm.likeRecipes = result.data.recipes;
                }, function(data, status, headers, config) {
                    console.log("Error getting recipes from the api");
                    alert("Error getting recipes from the api");
                });

            recipesFactory.getRecipes()
                .then(function(result) {
                    var userId = simpleStorage.get('userId');
                    var recipeArr = result.data.recipes;
                    for (var i = 0; i < recipeArr.length; i++) {
                        var obj = recipeArr[i];
                        if (obj.user_id === userId) {
                            console.log("this is ", obj)
                            $scope.userRecipes.push(obj)
                        }
                    }
                    // vm.userRecipes = result.data.recipes;
                }, function(data, status, headers, config) {
                    console.log("Error getting user recipes from the api");
                    alert("Error getting user recipes from the api");
                });

            $scope.activeTab = 0;
            $scope.setActiveTab = function(tabToSet) {
                $scope.activeTab = tabToSet;
            };


            vm.recipe = {
                ingredients: [],
                instructions: []
            };
            vm.addFormFieldforIngredients = function() {
                vm.recipe.ingredients.push('');
            }
            vm.addFormFieldforInstructions = function() {
                vm.recipe.instructions.push('');
            }
            vm.submitRecipe = function() {
                console.log(vm.recipe);
                console.log("this is token",simpleStorage.get('token'));
                recipesFactory.createRecipe(vm.recipe)
                    .then(function(result) {
                        console.log("success", result.data);
                    }, function(data, status, headers, config) {
                        console.error(status);
                    });
            };

          // vm.recipeId = 0;
          $scope.deleteRecipe = function(data){
            console.log("this is recipe: ", data);
          };


        };

        init();

        // this.deleteRecipe = function(data){
        //   console.log("this is recipe: ", data);
        // };


    };

    UserRecipeController.$inject = ['$scope', 'likeRecipesFactory', 'recipesFactory', 'appSettings'];

    // The Controller is part of the module.
    angular.module('recipesApp').controller('userRecipeController', UserRecipeController);

})();
