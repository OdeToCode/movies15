var module = angular.module("moviesApp", ["ngRoute", "ui.bootstrap"]);

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
                  .when("/about", {
                      templateUrl: "/apps/moviesapp/templates/about.html",
                      controller: "AboutController as about"
                  })
                  .when("/details/:id", {
                      templateUrl: "/apps/moviesapp/templates/details.html",
                      controller: "MovieDetailsController as detail"
                  })
                .when("/edit/:id", {
                    templateUrl: "/apps/moviesapp/templates/edit.html",
                    controller: "MovieEditController as edit"
                })
                .when("/scenarios", {
                    template: "<scenario-tabs></scenario-tabs>",

                }).otherwise({ redirectTo: "/list" });

});

module.run(function($log) {
    $log.info("Up and running!");
});