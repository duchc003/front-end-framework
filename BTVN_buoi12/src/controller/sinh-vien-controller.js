window.sinhVienController = function ($scope, $http) {
  $scope.danhSachSinhVien = [];

  $http.get(studentAPI).then(function (response) {
    console.log(response);
    if (response.status === 200) {
      $scope.danhSachSinhVien = response.data;
    }
  });

  $scope.removeSinhVien = function (envent, index) {
    envent.preventDefault();
    let x = $scope.danhSachSinhVien[index];
    let api = studentAPI + "/" + x.id;

    $http.delete(api).then(function () {
      $scope.danhSachSinhVien.splice(index, 1);
      alert("Xoa thanh cong");
    });
  };

  $scope.from_SinhVien = {
    ma: "",
    ten: "",
    tuoi: "",
    gioiTinh: true,
    diaChi: "",
  };

  $scope.detailSinhVien = function (event, index) {
    event.preventDefault();
    let sv = $scope.danhSachSinhVien[index];
    $scope.from_SinhVien.ma = sv.id;
    $scope.from_SinhVien.ten = sv.Name;
    $scope.from_SinhVien.tuoi = sv.age;
    $scope.from_SinhVien.gioiTinh = sv.gender;
    $scope.from_SinhVien.diaChi = sv.adress;
  };

  $scope.viTriUpdate = -1;

  $scope.addStudent = function (event) {
    event.preventDefault();
    $http.post(studentAPI, $scope.from_SinhVien).then(function (response) {
      $scope.danhSachSinhVien.push(response.data);
    });
  };

  $scope.updateSinhVien = function (event) {
    event.preventDefault();
    if ($scope.viTriUpdate == -1) {
      alert("Chon di");
    }
    let tv = $scope.danhSachSinhVien[$scope.viTriUpdate];
    let api = studentAPI + "/" + tv.id;
    $http.put(api, $scope.from_SinhVien).then(function (response) {
      $scope.danhSachSinhVien[$scope.viTriUpdate] = response.data;
    });
  };
};
