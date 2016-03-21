(function () {

    var module = angular.module("moviesApp");

    var controller = function ($routeParams, movieRespository, $location) {

        var model = this;
        var id = $routeParams.id;
        

        movieRespository.getById(id)
            .then(function(movie) {
                model.movie = movie;
            });
    };

    module.controller("MovieDetailsController", controller);

})();