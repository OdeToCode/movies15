(function () {

    var module = angular.module("moviesApp");


    var MovieRespository = function ($http, $q) {

        var baseUrl = "http://localhost:13467/api/movies/";
       

        var getById = function(id) {
            return $http.get(baseUrl + id).then(function(response) { return response.data });
        }

        var movies = null;
        var getAll = function () {

            if (movies) {
                return $q.when(movies);
            }

            return $http.get(baseUrl)
                        .then(function (response) {
                            //movies = response.data;
                            return response.data;
                        });
        };

        var update = function(movie) {
            return $http.put(baseUrl, movie)
                .then(function(response) {
                    return response.data;
                });
        };

        return {
            getAll: getAll,
            getById: getById,
            update: update
        };
    }

    module.factory("movieRespository", MovieRespository);

}());