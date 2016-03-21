
(function () {

    var module = angular.module("moviesApp");

    module.controller("MovieListController", ["$log", "movies", MovieListController]);

    function MovieListController($log, movies) {

        var model = this;

        $log.info("MovieListController started");

        model.message = "Hello World!";

        model.changeMessage = function() {
            model.message = "The message is now different";
        };

        model.rate = function(movie) {
            return {
                good: movie.rating > 3,
                bad: movie.rating < 2
            };
        };

        model.increaseRating = function(movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            }
        };

        model.decreaseRating = function(movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            }
        };

        var onSuccess = function(movies) {
            model.movies = movies;
        }

        var onError = function(reason) {
            model.reason = reason;
        }

        model.movies = movies;
    }
   

}());