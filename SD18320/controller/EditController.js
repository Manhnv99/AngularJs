window.EditController = function($scope, $routeParams, $http, $location) {
    var apiUrl = "http://localhost:3000/phone"

    $scope.inputData = {
        ma: '',
        ten: '',
        hang: 'Iphone',
        gia: ''
    }




    $http.get(`${apiUrl}/${$routeParams.id}`) // get dữ liệu theo id
        .then(function(response) {
            $scope.inputData.ma = response.data.ma
            $scope.inputData.ten = response.data.ten
            $scope.inputData.hang = response.data.hang
            $scope.inputData.gia = response.data.gia
        })
    $scope.onUpdate = function() {
        var newItem = {
            ma: $scope.inputData.ma,
            ten: $scope.inputData.ten,
            hang: $scope.inputData.hang,
            gia: $scope.inputData.gia,
        }
        $http.put(`${apiUrl}/${$routeParams.id}`, newItem)
            .then(function(response) {
                $location.path('/list-phone')
            })

    }
}