var myApp = angular.module("myModule", ["ngRoute"]);
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/home-chinh", {
      templateUrl: "pages/home.html",
      controller: hoaQuaController,
    })
    .when("/shop-ban-hang", {
      templateUrl: "pages/shop.html",
    })
    .otherwise({
      redirectTo: "/home-chinh",
    });
});
