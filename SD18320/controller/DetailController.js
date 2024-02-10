window.DetailController = function($scope, $http, $routeParams) {
    //tham số $routeParams có chức năng lấy được id ở trên đường dẫn
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

}