window.ListController = function ($scope, $http, $location, $routeParams) {
  const urlAPI = "http://localhost:3000/shoes";
  $http.get(urlAPI).then((res) => {
    if (res && res.status === 200) {
      $scope.shoes = res.data;
    }
  });
};
