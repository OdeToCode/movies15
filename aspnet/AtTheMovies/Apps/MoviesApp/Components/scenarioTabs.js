(function () {

    var module = angular.module("moviesApp");

    module.factory("analysisService", function ($timeout) {

        var getAnalysis = function () {
            
            var fakeResults = [];
            for (var i = 1; i < 5; i++) {
                var fakeAssets = [];
                for (var j = 1; j < 10; j++) {
                    fakeAssets.push({
                        name: "Asset " + parseInt(Math.random() * 100),
                        amount: Math.random() * 10000
                    });
                }
                fakeResults.push({
                    assets: fakeAssets,
                    id: i,
                    name: "Scenario " + parseInt(Math.random() * 100)
                });
            }

            // returns a promise, just like $http
            return $timeout(function () {
                return fakeResults;
            }, 250);

        };

        var getSettlementDate = function () {
            return $timeout(function () {
                return new Date(2015, 6, 11);
            }, 250);
        };

        return {
            getAnalysis: getAnalysis,
            getSettlementDate: getSettlementDate
        };

    });


    module.component("scenarioTabs", {
        templateUrl: "/apps/moviesapp/components/scenarioTabs.html",
        controller: function (analysisService) {
            var vm = this;

            var createTabForScenario = function (scenario) {
                return {
                    scenarioId: scenario.id,
                    title: scenario.name,
                    assets: scenario.assets
                };
            };

            var processSettlementDate = function (date) {
                vm.settlementDate = date;
            };

            var processAnalysis = function (analysis) {
                analysis.forEach(function (scenario) {
                    vm.tabs.push(createTabForScenario(scenario));
                });
            };

            vm.tabs = [];
            
            // $onInit: 
            analysisService.getAnalysis()
                           .then(processAnalysis);

            analysisService.getSettlementDate()
                           .then(processSettlementDate);           
        }
    });

    module.component("assetPopulatedAssumptionsScenario", {
        bindings: {
            "assets": "<"
        },
        template: "<table class='table'>" +
                    "<tr ng-repeat='asset in $ctrl.assets'>" +
                        "<td>{{asset.name}}</td>" +
                        "<td>{{asset.amount | currency}}</td>" +
                    "</tr>" +
                  "</table>"
    });

})();