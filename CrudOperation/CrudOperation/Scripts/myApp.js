var myApp = angular.module('myApp', []);
myApp.controller('employeeCtrl', function ($scope, $http) {
    //send to index
    $scope.employees = "";
    
    $http({
        method: 'get',
        url: '/Employee/GetEmployee',
        dataType: "json",
    }).then(function successCallback(response) {
        $scope.employees = response.data;
    }, function errorCallback(response) {
        alert(response);
    });

    //Recive from index

    $scope.savedata = function (employee) {
   
        $http.post("/Employee/SaveEmployee", { emp: employee })
            .success(function (result) {
                 
                $scope.employees = result;
            })
            .error(function (result) {
                console.log(result);
            })
    }

    //Selection Employee
    $scope.employee = "";
    $scope.selectEmpleployee = function (id) {

        $http.post("/Employee/GetemployeeByID", { id: id })
            .success(function (result) {

                $scope.employee = result;
            })
            .error(function (result) {
                console.log(result);
            })
    }

    //UpdateData
    $scope.updateData = function (employee) {

        $http.post("/Employee/UpdateData", { emp: employee })
            .success(function (result) {

                $scope.employees = result;
            })
            .error(function (result) {
                console.log(result);
            })
    }



    //Delete
    $scope.employee = "";
    $scope.deleteEmployee = function (id) {

        $http.post("/Employee/DeleteEmployee", { id: id })
            .success(function (result) {

                $scope.employees = result;
            })
            .error(function (result) {
                console.log(result);
            })
    }

});

 