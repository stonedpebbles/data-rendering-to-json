var mockDataForThisTest = "json=" + encodeURI(JSON.stringify([{
    id: 1,
    firstName: "Peter",
    lastName: "Johns"
}, {
    id: 2,
    firstName: "David",
    lastName: "James"
}, {
    id: 3,
    firstName: "Jim",
    lastName: "Jones"
}, {
    id: 4,
    firstName: "Paul",
    lastName: "Smith"
}, {
    id: 5,
    firstName: "Sam",
    lastName: "Colt"
}, {
    id: 6,
    firstName: "Ben",
    lastName: "Shawns"
}, {
    id: 7,
    firstName: "Brad",
    lastName: "Miller"
}, {
    id: 8,
    firstName: "Daniel",
    lastName: "Parsons"
}, {
    id: 9,
    firstName: "Harold",
    lastName: "Barnes"
}, {
    id: 10,
    firstName: "Brent",
    lastName: "Styles"
}]));

angular.module('myApp', [])
    .controller('PeopleCtrl', function ($scope, $http) {
    $scope.people = [];
    $scope.loadPeople = function () {
        var httpRequest = $http({
            method: 'POST',
            url: '/echo/json/',
            data: mockDataForThisTest

        }).success(function (data, status) {
            $scope.people = data;
        });

    };
});