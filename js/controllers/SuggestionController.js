app.controller("SuggestionController", [
    "$scope",
    "$routeParams",
    "suggestions"

    function($scope, $routeParams, suggestions){
        $scope.post = suggestions.posts[$routeParams.id];

        $scope.addComment = function(){
            $scope.post.comments.push({
                body: "",
                upvote: 0
            })
        }

        $scope.upvote = function(comment){
            comment.upvote += 1;
        }


}]);
