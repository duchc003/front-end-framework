window.quanRealController = function ($scope, $http) {
  $scope.listSanPham = [];
  $http.get(quanAPI).then(function (response) {
    console.log(response.data);
    $scope.listSanPham = response.data;
  });
};
