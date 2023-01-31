//bước 1 khởi tạo module
var myAPP = angular.module("myModule", []);
// bước 2 khởi tạo controller
// có 2 cách khởi tạo controller
// C1: dùng hàm cụ thể
// myAPP.controller("tên controler", tên hàm)
//scope: laf 1 service trong angular js là cầu nối giữa model và view
// myAPP.controller("myController", myController);
// function myController($scope) {
//   $scope.message = "Hoàng Công Đức";
// }
//c2 dùng hàm nặc danh
myAPP.controller("myController", function ($scope) {
  //khai báo một biến dạng string
  $scope.message = "Hoàng Công Đức";
  //khai báo một object
  var employee = {
    firstName: "Đức",
    lastName: "Hoàng",
  };
  $scope.employee = employee;
  //khai báo một array
  $scope.info = ["hihi", "hâha"];
  //khai báo mảng object
  $scope.employees = [
    {
      firstName: "Đức",
      lastName: "Hoàng",
    },
    {
      firstName: "Đức",
      lastName: "Hoàng",
    },
  ];
  $scope.tinhTong = function () {
    console.log(
      Number.parseInt($scope.number1) + Number.parseInt($scope.number2)
    );
  };
});
