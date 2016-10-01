app.factory("suggestions", [function(){

    var demoSuggestions = {

        comments: [],
        posts: [
            {
                title: 'Toaster',
                upvotes: 15,
                comments: []
            },
            {
                title: 'Table tennis',
                upvotes: 9,
                comments: []
            },
            {
                title: 'Fresh fruits',
                upvotes: 7,
                comments: []
            },
            {
                title: 'Yoga classes',
                upvotes: 3,
                comments: []
            }
        ]
    };

    return demoSuggestions;

}]);
