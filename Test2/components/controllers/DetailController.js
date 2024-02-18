window.DetailController = function ($scope, $http, $location, $routeParams) {
  const urlAPI = "http://localhost:3000/shoes/" + $routeParams.id;
  $http.get(urlAPI).then((res) => {
    if (res && res.status === 200) {
      $scope.shoe = res.data;
    }
  });
};
