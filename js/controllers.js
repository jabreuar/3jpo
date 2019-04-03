angular.module('app.controllers', [])

    .controller('homeCtrl', ['$scope', '$stateParams',
        function ($scope, $stateParams) {


        }])

    .controller('findMyTagCtrl', ['$scope', '$stateParams',
        function ($scope, $stateParams) {
            $scope.findMyTag = function () {
                $scope.name = "Gabriel Timm";
                $scope.entitlement = "Onsite/In-Home Service After Remote Diagnosis,3 Years";
                $scope.product = "LATITUDE 7390 2-IN-1";
            };
        }])

    .controller('menuCtrl', ['$scope', '$stateParams',
        function ($scope, $stateParams) {


        }])
    .controller('changeOwnerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])
