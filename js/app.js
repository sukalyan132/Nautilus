angular.module("myApp", ["ngRoute","dashboard",'720kb.tooltips'])
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "template/dashboard2.html",
        controller : "dashboardController",
    })
    .when("/dashboard", {
        templateUrl : "template/adminPanel.html",
        controller : "dashboardController"
    })
    .when("/admin", {
        templateUrl : "template/dashboard.html",
        controller : "dashboardController",
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
})