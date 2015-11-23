
movieApp.factory('searchResource', ["$resource", function ($resource) {
    return $resource("https://umovie.herokuapp.com/unsecure/search/:type/:seasons", {}, {

        searchMovie: {
            method: "GET",
            isArray: false,
            params: {
                type: "movies",
                q: "query"
            }
        },

        searchTvShows: {
            method: "GET",
            isArray: false,
            params : {
                type : "tvshows",
                seasons: "seasons",
                q: "query"
            }
        },

        searchActor: {
            method: "GET",
            isArray: false,
            params: {
                type: "actors",
                q: "query"
            }
        }

    });
}]);