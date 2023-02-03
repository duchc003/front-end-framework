var app = angular.module("myModule", ["ngRoute"]); //Ngoặc vuông dùng để chứa dependency
//chuyển trang
app.config(function ($routeProvider, $locationProvider) {
  // $locationProvider có thể truyền hoặc không
  // $routeProvider bắt buộc phai có
  //option (có hoặc không tùy) => đường dẫn đẹp
  $locationProvider.hashPrefix("");
  //chuyển trang
  $routeProvider
    .when("/trang-Chu", {
      //nội dung của trang có đường dẫn là trang chủ
      // template: "<h1>Đây là trang chủ</h1>",
      templateUrl: "pages/trang-Chu.html",
      controller: ThucVatController,
    })
    .when("/gioi-thieu", {
      template: "<h1>Đây là giới thiệu</h1>",
    })
    .when("/ve-chung-toi", {
      template: "<h1>Đây là chúng tôi</h1>",
    })
    .otherwise({
      redirectTo: "/ve-chung-toi",
    });
});
