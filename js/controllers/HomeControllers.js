app.controller("HomeController", [
    "$scope",
    "suggestions",

    function($scope, suggestions){
        $scope.posts = suggestions.posts;

        $scope.addSuggestion = function(){

            if(!$scope.title || $scope.title === ""){
                alert("you must insert a suggestion");
                return;
            }

            $scope.posts.push({
                title: $scope.title,
                upvotes: 0,
                comments: []
            });

            $scope.title = "";
        }

        $scope.upVote = function(posts){
            console.log(posts);
            posts.upvotes += 1;
        }

        $scope.comments = [];
}]);
