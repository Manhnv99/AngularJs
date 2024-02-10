

window.AddController = function($scope, $http, $location) {
    var apiUrl = "http://localhost:3000/phone"

    $scope.inputData = {
        ma: '',
        ten: '',
        hang: 'Iphone',
        gia: ''
    }



    $scope.onCreate = function() {
        var newItem = {
            ma: $scope.inputData.ma,
            ten: $scope.inputData.ten,
            hang: $scope.inputData.hang,
            gia: $scope.inputData.gia
        }
        $http.post(apiUrl, newItem)
            .then(function(response) {
                $location.path('/list-phone')
            })
    }
}