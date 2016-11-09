appCtrl.controller('kuaidiController', ['$scope', '$stateParams', function($scope,$stateParams){
  var vm = $scope;

  vm.jiname = '';
  vm.jiaddrass = '';
  vm.jitel = '';
  vm.shouname = '';
  vm.shouaddress = '';
  vm.shoucode = '';
  vm.shoutel = '';
  vm.gname = '';
  vm.gweight = '';
  vm.gprice = '';

  vm.isShow = false;
  vm.showM = function(){
    vm.isShow = !(vm.isShow);
  }
  vm.submitKD = function(){
    vm.isShow = !(vm.isShow);

    var kuaidiInfo =new setCour(vm.jiname,vm.jiaddrass,vm.jitel,vm.shouname,vm.shouaddress,vm.shoucode,vm.shoutel,vm.gname,vm.gweight,vm.gprice);
    var kuaidiArr = [];
    var products = localStorage.getItem('kuaidi');
    if(products){
      kuaidiArr = JSON.parse(products);
    }

    kuaidiArr.push(kuaidiInfo);
    localStorage.setItem("kuaidi", JSON.stringify(kuaidiArr));
  }



}])
