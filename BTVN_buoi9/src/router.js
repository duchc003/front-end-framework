var myApp = angular.module("myModule", ["ngRoute"]);
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/home", {
      templateUrl: "pages/trang-chu.html",
      controller: trangChuControlller,
    })
    .when("/student", {
      templateUrl: "pages/sinh-vien.html",
      controller: trangChuControlller,
    })
    .when("/about", {
      templateUrl: "pages/gioi-thieu.html",
    })
    .otherwise("/home", {
      redirecTo: "pages/trang-chu.html",
    });
});
