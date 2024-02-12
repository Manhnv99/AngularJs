window.DetailController = function ($scope, $http, $routeParams, $location) {
  const endpoint = "http://localhost:3000/products/" + $routeParams.id;
  $scope.product = {};
  $http.get(endpoint).then((res) => {
    $scope.product = res.data;
  });
};
