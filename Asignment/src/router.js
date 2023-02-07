var myApp = angular.module("myModule", ["ngRoute"]);
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix();
  $routeProvider
    .when("/home", {
      templateUrl: "pages/trang-chu.html",
    })
    .when("/gio-hang", {
      templateUrl: "pages/gio-hang.html",
    })
    .when("/dang-nhap", {
      templateUrl: "pages/dang-nhap.html",
    })
    .when("/dang-ki", {
      templateUrl: "pages/dang-ki.html",
    })
    .when("/lien-he", {
      templateUrl: "pages/lien-he.html",
    })
    .otherwise("/home", {
      redirecTo: "pages/trang-chu.html",
    });
});
