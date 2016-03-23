(function () {

    var module = angular.module("moviesApp");

    var controller = function ($routeParams, movieRespository, $location) {

        var model = this;
        var id = $routeParams.id;
        var originalMovie;

        model.reset = function() {
            model.movie = angular.copy(originalMovie);
            model.form.$setPristine();
            return false;
        };

        model.save = function() {
            movieRespository.update(model.movie)
                            .then(function(movie) {
                                $location.path("/details/" + movie.id);
                });
        };

        movieRespository.getById(id)
            .then(function (movie) {
                originalMovie = angular.copy(movie);
                model.movie = movie;
            });
    };

    module.controller("MovieEditController", controller);

})();