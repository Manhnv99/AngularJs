window.ListController = function ($scope, $http) {
  $scope.id = undefined;
  const endpoint = "http://localhost:3000/products";
  const loading = document.querySelector(".loading-container");
  $http.get(endpoint).then((res) => {
    $scope.products = res.data;
  });
  $scope.handleSetId = (id) => {
    $scope.id = id;
  };
  $scope.handleDelete = () => {
    loading.style.display = "flex";
    setTimeout(() => {
      const newEndPoint = endpoint + "/" + $scope.id;
      $http.delete(newEndPoint).then((res) => {
        if (res && res.status === 200) {
          loading.style.display = "none";
        }
      });
    }, 1500);
  };
};
