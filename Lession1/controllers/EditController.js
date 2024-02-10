window.EditController = function ($scope, $http, $location, $routeParams) {
  const endpoint = "http://localhost:3000/products/" + $routeParams.id;
  const animation = document.querySelector(".animation_container");
  $scope.product = {};
  $http.get(endpoint).then((res) => {
    $scope.product = res.data;
  });

  $scope.handleEdit = () => {
    animation.style.display = "flex";
    setTimeout(() => {
      $http.put(endpoint, $scope.product).then((res) => {
        if (res && res.status === 200) {
          $location.path("/list-phone");
          animation.style.display = "none";
        }
      });
    }, 1500);
  };
};
