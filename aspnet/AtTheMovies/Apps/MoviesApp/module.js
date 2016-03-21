var module = angular.module("moviesApp", ["ngRoute"]);

// http://server.com/movies/list
// http://servercom/movies/details/3




module.config(function ($routeProvider) {
    $routeProvider.when("/list",
        {
            templateUrl: "/apps/moviesapp/templates/list.html",
            controller: "MovieListController as list",
            resolve: {
                movies: function(movieRespository) {
                    return movieRespository.getAll();
                }   
            }
        })
                  .when("/about", { template: "<div>This is the about page</div>" })
                  .when("/details/:id", {
                      templateUrl: "/apps/moviesapp/templates/details.html",
                      controller: "MovieDetailsController as detail"
                    })
                  .otherwise({ redirectTo: "/list" });

});

module.run(function($log) {
    $log.info("Up and running!");
});