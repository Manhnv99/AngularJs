window.DeleteController = function ($scope, $http, $location, $routeParams) {
  const urlAPI = "http://localhost:3000/shoes/" + $routeParams.id;
  const loading = document.querySelector(".loading-container");
  $http.get(urlAPI).then((res) => {
    if (res && res.status === 200) {
      $scope.shoe = res.data;
    }
  });
  $scope.handleRemoveShoe = () => {
    loading.style.display = "flex";
    setTimeout(() => {
      $http.delete(urlAPI).then((res) => {
        if (res && res.status === 200) {
          $location.path("/shoe");
          loading.style.display = "none";
        }
      });
    }, 1500);
  };
};
