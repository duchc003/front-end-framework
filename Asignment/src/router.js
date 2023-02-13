var myApp = angular.module("myModule", ["ngRoute"]);
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/home", {
      templateUrl: "pages/trang-chu.html",
      controller: trangChuController,
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
    .when("/product", {
      templateUrl: "pages/product.html",
      controller: trangChuController,
    })
    .when("/lien-he", {
      templateUrl: "pages/lien-he.html",
    })
    .when("/introduct", {
      templateUrl: "pages/gioi-thieu.html",
    })
    .when("/quen-mat-khau", {
      templateUrl: "pages/quen-mat-khau.html",
    })
    .when("/login", {
      templateUrl: "pages/dang-nhap.html",
    })
    .when("/ao-real", {
      templateUrl: "pages/ao-real.html",
    })
    .when("/quan-real", {
      templateUrl: "pages/quan-real.html",
    })
    .when("/giay-real", {
      templateUrl: "pages/giay-real.html",
    })
    .when("/All", {
      templateUrl: "pages/product.html",
      controller: trangChuController,
    })
    .otherwise("/home", {
      redirecTo: "pages/trang-chu.html",
    });
});
