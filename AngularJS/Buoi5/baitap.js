var myAPP = angular.module("myModule", []);
myAPP.controller("myController", function ($scope) {
  $scope.hocSinh = {
    name: "Hoàng Công Đức",
    age: 19,
    address: "Phú Thọ",
    nganhHoc: "Ứng Dụng Phần Mềm",
  };

  $scope.SinhVien = {
    name: "Hoàng Công Đức",
    gender: "Nam",
    ngayThangNamSinh: "28/8/2003",
    diem: "8",
  };
  $scope.MangSinhVien = [
    {
      name: "Hoàng Công Đức",
      gender: "Nam",
      ngayThangNamSinh: "28/8/2003",
      diem: "8",
    },
    {
      name: "Vũ Đình Minh",
      gender: "Nam",
      ngayThangNamSinh: "23/11/2003",
      diem: "8",
    },
    {
      name: "Nguyễn Hưu Nguyên",
      gender: "Nam",
      ngayThangNamSinh: "07/12/2001",
      diem: "8",
    },
  ];
  $scope.inThongBao = function () {
    $scope.message = "Hoàng Công Đức";
  };
});
