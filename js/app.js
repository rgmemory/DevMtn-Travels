angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })

            .state('adventures', {
                url: '/adventures',
                parent: 'home',
                templateUrl:"../views/about-adventurers.html"
            })

            .state('contact', {
                url: '/contact',
                parent: 'home',
                templateUrl: "../views/contact.html"
            })

            .state('packages', {
                url:'/packages',
                controller: 'packagesCtrl',
                templateUrl: "../views/packages.html"
            })

            .state('booked', {
                url:'/booked/:xyz',
                controller: 'bookedCtrl',
                templateUrl: "../views/booked.html"

            })

            .state('locations', {
                url:'/locations',
                templateUrl: "../views/locations.html"
            });









        $urlRouterProvider
            .otherwise('/');
    });
