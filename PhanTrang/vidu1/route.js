var app = angular.module("myApp", []); //Tạo một module AngularJS với tên "myApp":
//Tạo một controller AngularJS với tên "myCtrl" và sử dụng "$scope" để truyền dữ liệu giữa view và controller:
app.controller("myCtrl", function ($scope) {
  //Trong controller, tạo một mảng "items" chứa dữ liệu cần phân trang:
  $scope.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //Tạo một biến "currentPage" để lưu trạng thái trang hiện tại:
  $scope.currentPage = 1;
  //Tạo một biến "itemsPerPage" để lưu số phần tử trên mỗi trang:
  $scope.itemsPerPage = 3;
  //Tạo một hàm "numberOfPages" để tính toán số trang cần hiển thị dựa vào số phần tử trên mỗi trang và tổng số phần tử:
  $scope.numberOfPages = function () {
    return Math.ceil($scope.items.length / $scope.itemsPerPage);
  };
});
