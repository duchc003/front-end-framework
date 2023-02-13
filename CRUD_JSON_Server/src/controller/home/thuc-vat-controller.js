window.ThucVatController = function ($scope, $http) {
  $scope.danhSachThucVat = [];

  $http.get(thucVatAPI).then(function (response) {
    console.log(response);
    if (response.status === 200) {
      $scope.danhSachThucVat = response.data;
    }
  });
  // DELETE : Xoa
  $scope.removeStudent = function (event, index) {
    event.preventDefault();
    let tv = $scope.danhSachThucVat[index];
    let api = thucVatAPI + "/" + tv.id;
    $http.delete(api).then(function () {
      $scope.danhSachThucVat.splice(index, 1);
      alert("xoa thanh cong");
    });
  };
  $scope.form_sinhVien = {
    ten: "",
    loai: "",
    gioiTinh: true,
  };
  // Detail
  $scope.detailStudent = function (event, index) {
    event.preventDefault();
    let tv = $scope.danhSachThucVat[index];
    $scope.form_sinhVien.ten = tv.ten;
    $scope.form_sinhVien.loai = tv.loai;
    $scope.form_sinhVien.gioiTinh = tv.gioiTinh;
  };
};
// để giao tiếp BE,FE dùng phương thức HTTP để giao tiếp
// và sử dụng các method (HTTP method): GET , POST , DELETE,PUT
// CRUD : Create , read , delete,update
// GET hiện thị dữ liệu > read > select
//403 lỗi cấm quyền
//Request : những gái trị từ client => server (FE => BE)
// giống cái tham số truyền vào của 1 hàm
// respose : kết quả trả về từ phía server => client(BE =>FE)
