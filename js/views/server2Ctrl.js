appCtrl.controller('server2Controller', ['$scope', '$stateParams', function($scope,$stateParams){
  var vm = $scope;
  
  vm.cshenName = '';
  vm.cdart = '';
  vm.cshenTel = '';
  vm.cName = '';
  vm.cTel = '';
  vm.cRegion = '';
  vm.cClass = '';
  vm.cCompany = '';
  vm.cCode = '';
  vm.ckuaID = '';
  vm.cshenID = '';
  vm.caddress = '';
  vm.cExplain = '';
  vm.cMark = '';

  vm.isShow = false;
  vm.showM = function(){
    vm.isShow = !(vm.isShow);
  }
  vm.submitK = function(){
    vm.isShow = !(vm.isShow);

    var courierInfo =new setCour(vm.cshenName,vm.cdart,vm.cshenTel,vm.cName,vm.cTel,vm.cRegion,vm.cClass,vm.cCompany,vm.cCode,vm.ckuaID,vm.cshenID,vm.caddress,vm.cExplain,vm.cMark);
    var courierArr = [];
    var products = localStorage.getItem('courier');
    if(products){
      courierArr = JSON.parse(products);
    }

    courierArr.push(courierInfo);
    localStorage.setItem("courier", JSON.stringify(courierArr));
  }



}])
