window.giayController = function ($scope, $http) {
  $scope.listSanPham = [];
  $http.get(giayAPI).then(function (response) {
    console.log(response.data);
    $scope.listSanPham = response.data;
  });
};
