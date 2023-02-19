var myApp = angular.module("myModule", ["ngRoute"]);
// chuyen trang
myApp.config(function ($routeProvider, $locationProvider) {
  // xoa khoang trang trinh duyet
  $locationProvider.hashPrefix("");
  // $routeProvider : chuyen trang
  $routeProvider
    .when("/trang-chu", {
      templateUrl: "pages/trang-chu.html",
      controller: sinhVienController,
    })
    .when("/student", {
      templateUrl: "pages/sinh-vien.html",
      controller: sinhVienController,
    })
    .when("/gioi-thieu", {
      templateUrl: "pages/page.html",
    })
    .otherwise({
      redirectTo: "/trang-chu",
    });
});
