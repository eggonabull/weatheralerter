angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // alerts page that will use the AlertController
        .when('/alerts', {
            templateUrl: 'views/alert.html',
            controller: 'AlertController'
        });

    $locationProvider.html5Mode(true);

}]);