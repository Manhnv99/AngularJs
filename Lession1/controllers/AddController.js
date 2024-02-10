window.AddController = function ($scope, $http, $location) {
  const endpoint = "http://localhost:3000/products";
  const animation = document.querySelector(".animation_container");
  $scope.product = {
    name: "",
    brand: "Iphone",
    price: "",
  };

  $scope.handleAdd = () => {
    animation.style.display = "flex";
    setTimeout(() => {
      $http.post(endpoint, $scope.product).then((res) => {
        if (res && res.status === 201) {
          $location.path("/list-phone");
          animation.style.display = "none";
        }
      });
    }, 1500);
  };
};
