appCtrl.controller('server3Controller', ['$scope', '$stateParams', function($scope,$stateParams){
  var vm = $scope;
    vm.dName = '';
    vm.searchName = '';

    var arr = localStorage.getItem("daitian");
    vm.daiArr = JSON.parse(arr);

    vm.queryC = function(){
      vm.searchName =  vm.dName;
    }
    vm.deleteD = function(item){
      console.log(item);
      var arr = [];
      for(var i = 0;i < vm.daiArr.length;i++){
        if(vm.daiArr[i].cName !== item.cName){
          arr.push(vm.daiArr[i]);
        }
      }

      localStorage.setItem('daitian', JSON.stringify(arr));
      vm.daiArr = arr;
    }
}])
