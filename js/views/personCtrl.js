appCtrl.controller('userController',['$scope','$http', function($scope,$http){

  $scope.users = [];
  $http({
    url: '/mock/person.json',
    method: 'get'
  })
  .then(function(res){
    $scope.users = res.data.data;
  });

  $scope.name = '';
  $scope.qname = '';

  $scope.queryU = function(){
    $scope.qname=$scope.name;
  }

  $scope.deleteU = function(item){
    var arr = [];
    for(var i = 0;i < $scope.users.length;i++){
      if($scope.users[i].name !== item.name){
        arr.push($scope.users[i]);
      }
    }
    $scope.users = arr;
  }
}])
