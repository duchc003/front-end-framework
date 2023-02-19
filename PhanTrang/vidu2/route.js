var app = angular.module("myApp", []);
app.controller("productsController", function ($scope) {
  $scope.products = [
    { name: "product 1" },
    { name: "product 2" },
    //...
    { name: "product 100" },
  ];
  $scope.pageSize = 10;
  $scope.currentPage = 0;
  $scope.numberOfPages = function () {
    return Math.ceil($scope.products.length / $scope.pageSize);
  };
  $scope.previousPage = function () {
    $scope.currentPage--;
  };
  $scope.nextPage = function () {
    $scope.currentPage++;
  };
});
app.filter("startFrom", function () {
  return function (input, start) {
    start = +start; //parse to int
    return input.slice(start);
  };
});
