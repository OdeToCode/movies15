(function () {

    angular.module("moviesApp").controller("ShellController", ["$timeout",
        function ($timeout) {

            var model = this;

            model.doWork = function () {

            };

            model.counter = 0;

            var incrementCounter = function () {
                model.counter += 1;
                $timeout(incrementCounter, 1000);
            };

            $timeout(incrementCounter, 1000);

        }]);

})();