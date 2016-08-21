(function userRecipeControllerIIFE() {

    var UserRecipeController = function($scope, likeRecipesFactory, recipesFactory, appSettings) {
        var vm = this;
        vm.appSettings = appSettings;
        vm.likeRecipes = [];
        $scope.userRecipes = [];

        function init() {

            // likeRecipesFactory.getRecipes()
            //     .then(function(result) {
            //         var userId = simpleStorage.get('userId');
            //         var likeArr = result.data.like_recipes;
            //         for (var i = 0; i < likeArr.length; i++) {
            //             var obj = likeArr[i];
            //             if (obj.user_id === userId) {
            //                 console.log("this is ", obj)
            //                 vm.likeRecipes.push(obj)
            //             }
            //         }
            //     }, function(data, status, headers, config) {
            //         console.log("Error getting recipes from the api");
            //         alert("Error getting recipes from the api");
            //     });

            $scope.initGet = function() {
                recipesFactory.getRecipes()
                    .then(function(result) {
                        $scope.userRecipes = [];
                        console.log('cleared');
                        var userId = simpleStorage.get('userId');
                        var recipeArr = result.data.recipes;
                        for (var i = 0; i < recipeArr.length; i++) {
                            var obj = recipeArr[i];
                            if (obj.user_id === userId) {
                                console.log("this is ", obj);
                                $scope.userRecipes.push(obj);
                            }
                        }
                    }, function(data, status, headers, config) {
                        console.log("Error getting user recipes from the api");
                        alert("Error getting user recipes from the api");
                    });
            };

            $scope.activeTab = 0;
            $scope.setActiveTab = function(tabToSet) {
                $scope.activeTab = tabToSet;
                $scope.initGet();
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
                console.log("this is token", simpleStorage.get('token'));
                recipesFactory.createRecipe(vm.recipe)
                    .then(function(result) {
                        console.log("success", result.data);
                        $('.makeRecipeInput').val("");
                        return recipesFactory.getRecipes();
                    }, function(data, status, headers, config) {
                        console.error(status);
                    })
                    .then(function(result) {
                        $scope.userRecipes = [];
                        var userId = simpleStorage.get('userId');
                        var recipeArr = result.data.recipes;
                        for (var i = 0; i < recipeArr.length; i++) {
                            var obj = recipeArr[i];
                            if (obj.user_id === userId) {
                                console.log("this is ", obj)
                                $scope.userRecipes.push(obj)
                            }
                        }
                    }, function(data, status, headers, config) {
                        console.log("Error getting user recipes from the api");
                        alert("Error getting user recipes from the api");
                    });
            };


            $scope.deleteRecipe = function(recipe) {
                console.log("this is recipe: ", recipe);
                recipesFactory.deleteRecipe(recipe.id)
                    .then(function() {
                        console.log("delete recipe success");
                        return recipesFactory.getRecipes();
                    }, function(data, status, headers, config) {
                        console.log('catch error during delete recipe');
                        console.error(data, status);
                    })
                    .then(function(result) {
                        $scope.userRecipes = [];
                        var userId = simpleStorage.get('userId');
                        var recipeArr = result.data.recipes;
                        for (var i = 0; i < recipeArr.length; i++) {
                            var obj = recipeArr[i];
                            if (obj.user_id === userId) {
                                console.log("this is ", obj)
                                $scope.userRecipes.push(obj)
                            }
                        }
                    }, function(data, status, headers, config) {
                        console.log("Error getting user recipes from the api");
                        alert("Error getting user recipes from the api");
                    });
            };


        };

        init();



    };

    UserRecipeController.$inject = ['$scope', 'likeRecipesFactory', 'recipesFactory', 'appSettings'];


    angular.module('recipesApp').controller('userRecipeController', UserRecipeController);

})();
