window.HomeController = function ($scope, $http, $location) {
  const api = "http://localhost:3000/subjects";
  $scope.subjects = [];
  $scope.currentPage = 1;
  $scope.pageSize = 3;
  $http.get(api).then((res) => {
    $scope.subjects = res.data;
  });

  $scope.handleTestQuiz = (id, name) => {
    if (confirm("Bạn Có Muốn Làm Bài Test Của " + name)) {
      $location.path("/testQuiz/" + id);
    }
  };
};
