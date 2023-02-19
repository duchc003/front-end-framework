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
    .when("/ao", {
      templateUrl: "pages/ao-real.html",
      controller: aoRealController,
    })
    .when("/ao-real", {
      templateUrl: "pages/ao-real.html",
      controller: aoRealController,
    })
    .when("/quan-real", {
      templateUrl: "pages/quan-real.html",
      controller: quanRealController,
    })
    .when("/giay-real", {
      templateUrl: "pages/giay-real.html",
      controller: giayController,
    })
    .when("/them-san-pham", {
      templateUrl: "pages/trang-cua-toi.html",
      controller: giayController,
    })
    .when("/danh-muc-san-pham", {
      templateUrl: "pages/add-danh-muc-sanpham.html",
      controller: giayController,
    })
    .when("/admin", {
      templateUrl: "pages/trang-cua-toi.html",
      controller: quanRealController,
    })
    .otherwise("/home", {
      redirecTo: "pages/trang-chu.html",
    });
});
