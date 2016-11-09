appCtrl.controller('server1Controller', ['$scope', '$stateParams','$filter', function($scope,$stateParams,$filter){
  var vm = $scope;
  vm.cID = '';
  vm.searchId = '';

  var courArr = localStorage.getItem("courier");
  vm.cours = JSON.parse(courArr);

  vm.queryC = function(){
    vm.searchId =  vm.cID;
  }
  vm.deleteC = function(item){
    console.log(item);
    var arr = [];
    for(var i = 0;i < vm.cours.length;i++){
      if(vm.cours[i].ckuaID !== item.ckuaID){
        arr.push(vm.cours[i]);
      }
    }
    localStorage.setItem('courier', JSON.stringify(arr));
    vm.cours = arr;
  }
}])
