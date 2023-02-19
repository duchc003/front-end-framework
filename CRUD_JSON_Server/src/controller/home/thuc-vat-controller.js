window.ThucVatController = function ($scope, $http) {
  // backend - fontend 2 project doc lap voi nhau:
  // de back-edn va font end giao tiep voi nhau -->
  // dung phuong thuc HTTP de giao tiep
  //  va su dung cac method (HTTP method: (co ban): GET, POST, DELETE, PATH, ...)
  // Dai dien cho CRUD: Create, Read, Update, Delete
  // GET: dung de hien thi du lieu: <--> READ <--> SELECT
  $scope.listThucVat = [];

  $scope.viTricanDuocUpdate = -1;

  $http.get(thucVatAPI).then(function (response) {
    if (response.status === 200) {
      // 403 loi cam quyen, 404 loi duong dan, ....
      $scope.listThucVat = response.data;
    }
    console.log(response.data);
  });
  // POST:
  // DELETE:

  $scope.deleteThucVat = function (envent, index) {
    envent.preventDefault();
    let x = $scope.listThucVat[index];
    let api = thucVatAPI + "/" + x.id;

    $http.delete(api).then(function () {
      $scope.listThucVat.splice(index, 1);
      alert("Xoa thanh cong");
    });
  };

  $scope.form_ThucVat = {
    ten: "",
    loai: "",
    gioiTinh: false,
  };

  $scope.detailThucVat = function (envent, index) {
    envent.preventDefault();
    let x = $scope.listThucVat[index];

    $scope.form_ThucVat.ten = x.name;
    $scope.form_ThucVat.loai = x.age;
    $scope.form_ThucVat.gioiTinh = x.gender;
    $scope.viTricanDuocUpdate = index;
  };

  //post :them du lieu <=> create <=> insert into
  $scope.addThucVat = function (event) {
    event.preventDefault();
    $http.post(thucVatAPI, $scope.form_ThucVat).then(function (response) {
      $scope.listThucVat.push(response.data);
    });
  };

  // -1: chua chon dong update

  //PUT sua du lieu <=> update <=> update
  $scope.updateThucVat = function (event) {
    event.preventDefault();
    let tv = $scope.listThucVat[$scope.viTricanDuocUpdate];
    let api = thucVatAPI + "/" + tv.id;
    $http.post(api, $scope.form_ThucVat).then(function (response) {
      $scope.listThucVat[$scope.viTricanDuocUpdate] = response.data;
    });
  };
};
