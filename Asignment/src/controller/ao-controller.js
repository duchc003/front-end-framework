window.aoRealController = function ($scope, $http) {
  $scope.listSanPham = [];
  $http.get(trangChuAPI).then(function (response) {
    console.log(response.data);
    $scope.listSanPham = response.data;
  });
};
