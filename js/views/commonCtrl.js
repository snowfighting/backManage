appCtrl.controller('commonController', ['$scope', '$stateParams', function($scope,$stateParams){
  var vm = $scope;
  vm.meName = $stateParams.meName;
  vm.meSub = $stateParams.meSub;
}])
