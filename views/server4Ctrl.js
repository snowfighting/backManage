appCtrl.controller('server4Controller', ['$scope', '$stateParams', function($scope,$stateParams){
  var vm = $scope;

    vm.cshenName = '';
    vm.cdart = '';
    vm.cshenTel = '';
    vm.cdaiName = '';
    vm.cName = '';
    vm.cTel = '';
    vm.cRegion = '';
    vm.cClass = '';
    vm.cCompany = '';
    vm.cCode = '';
    vm.caddress = '';
    vm.cExplain = '';
    vm.cMark = '';

    vm.isShow = false;
    vm.showM = function(){
      vm.isShow = !(vm.isShow);
    }

    vm.submitD = function(){
      vm.isShow = !(vm.isShow);

      var daiInfo =new setDai(vm.cshenName,vm.cdart,vm.cshenTel,vm.cdaiName,vm.cName,vm.cTel,vm.cRegion,vm.cClass,vm.cCompany,vm.cCode,vm.caddress,vm.cExplain,vm.cMark);
      var daiArr = [];
      var products = localStorage.getItem('daitian');
      if(products){
        daiArr = JSON.parse(products);
      }

      daiArr.push(daiInfo);
      localStorage.setItem("daitian", JSON.stringify(daiArr));

    }
}])
