
var phonecatApp = angular.module('Irmnet', ['ngResource','phonecatControllers','phonecatServices']);
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('IrmnetCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.noticias = Phone.query();
    $scope.orderProp = 'age';
  }]);