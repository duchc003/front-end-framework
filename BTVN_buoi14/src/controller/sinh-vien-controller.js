window.sinhVienController = function ($scope, $http) {
  $scope.listSinhVien = [];
  $http.get(studentAPI).then(function (response) {
    $scope.listSinhVien = response.data;
  });
  $scope.viTriUpdate = -1;
  $scope.formSinhVien = {
    id: "",
    maSV: "",
    name: "",
    canNang: 0,
    loai: "",
    gioiTinh: true,
    chuyenNganh: "",
    soThich: "",
  };
  $scope.removeSinhVien = function (event, index) {
    event.preventDefault();
    let sv = $scope.listSinhVien[index];
    let api = studentAPI + "/" + sv.id;
    $http.delete(api).then(function (response) {
      $scope.listSinhVien.splice(index, 1);
    });
  };
  $scope.detailSinhVien = function (event, index) {
    event.preventDefault();
    let sv = $scope.listSinhVien[index];
    $scope.formSinhVien.id = sv.id;
    $scope.formSinhVien.maSV = sv.MaSV;
    $scope.formSinhVien.name = sv.Name;
    $scope.formSinhVien.canNang = sv.CanNang;
    $scope.formSinhVien.loai = sv.Loai;
    $scope.formSinhVien.gioiTinh = sv.gioiTinh;
    $scope.formSinhVien.chuyenNganh = sv.ChuyenNganh;
    $scope.formSinhVien.soThich = sv.SoThich;
    $scope.viTriUpdate = index;
  };
  $scope.addSinhVien = function (event) {
    event.preventDefault;
    $http.post(studentAPI, $scope.formSinhVien).then(function (response) {
      $scope.listSinhVien.push(response.data);
    });
  };
  $scope.updateSinhVien = function (event) {
    event.preventDefault;
    if ($scope.viTriUpdate == -1) {
      alert("Chọn đi");
    }
    let sv = $scope.listSinhVien[$scope.viTriUpdate];
    let api = studentAPI + "/" + sv.id;
    $http.put(api, $scope.formSinhVien).then(function (response) {
      $scope.listSinhVien[$scope.viTriUpdate] = response.data;
    });
  };
};
