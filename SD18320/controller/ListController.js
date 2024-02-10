window.ListController = function($scope, $http) {
    var apiUrl = "http://localhost:3000/phone";
    $http.get(apiUrl)
        .then(function(response) {
            $scope.list = response.data;
        })

    $scope.confirm = function(id) {
        $scope.idDelete = id;
    }

    $scope.onDelete = function() {
        $http.delete(`${apiUrl}/${$scope.idDelete}`)
            .then(function(response) {

            });
    }

}