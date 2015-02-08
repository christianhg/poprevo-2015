(function () {
    'use strict';

    angular
        .module('poprevo.core')
        .controller('CoreController', CoreController);

    function CoreController($scope) {
        $scope.$on('$stateChangeSuccess', function(event, toState) {
            $scope.pageTitle = toState.data.pageTitle;
        });

        $scope.menuOpen = false;

        $scope.toggleMenu = function() {
            $scope.menuOpen = !$scope.menuOpen;
        };
    }

})();