(function () {

    var module = angular.module("moviesApp");

    module.component("thingDetail", {
        bindings: {
            thing: "<",
            remove: "&"
        },
        templateUrl: "/apps/moviesapp/templates/thingDetail.component.html",
        controller: function() {
            var model = this;

            model.onRemove = function() {
                this.remove();
            }
        }
    });


    module.controller("AboutController", function() {

        var model = this;
        var defaultThing = {
            title: "Empty",
            rating: 1
        };

        model.editThing = angular.copy(defaultThing);

        model.things = [];

        model.saveThing = function() {
            model.things.push(model.editThing);
            model.editThing = angular.copy(defaultThing);
        };

        model.remove = function(thing) {
            for (var i = 0; i < model.things.length; i++) {
                if (model.things[i] === thing) {
                    model.things.splice(i, 1);
                }
            }
        };


    });

})();