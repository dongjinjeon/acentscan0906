angular.module('BlocksApp').controller('ErrController', function ($stateParams, $rootScope, $scope) {

  // $rootScope.$state.current.data["pageSubTitle"] = $stateParams.hash;
  $rootScope.isHome = false;
  $scope.thing = $stateParams.thing;
  $scope.hash = $stateParams.hash;
  $scope.settings = $rootScope.setup;

})