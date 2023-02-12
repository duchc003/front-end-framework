var myApp = angular.module("myModule", ["ngRoute"]);
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/student", {
      templateUrl: "pages/sinh-vien.html",
      controller: trangChuControlller,
    })
    .when("/student/remove/:id", {
      templateUrl: "pages/sinh-vien.html",
      controller: "UserController",
    })
    .when("/about", {
      templateUrl: "pages/gioi-thieu.html",
    })
    .otherwise("/student", {
      redirecTo: "pages/sinh-vien.html",
    });
});
myApp.controller("UserController", function ($routeParams) {
  var userId = $routeParams.id;
});
