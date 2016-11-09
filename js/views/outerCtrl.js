appCtrl.controller('outerController', ['$scope','menuService', function($scope,menuService){
  var vm = $scope;
  vm.menuList = menuService.menuList;
  vm.menukey = [];
  for(i in vm.menuList){
    if(vm.menuList.hasOwnProperty(i)){
      vm.menukey.push(i);
    }
  }

}])
