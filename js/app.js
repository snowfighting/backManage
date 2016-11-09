var myApp = angular.module('myApp',['ui.router','app-ctrl','app-service']);

myApp.config(['$stateProvider', function($stateProvider){
  $stateProvider
    .state('server1', {
      params: {"meName": null, "meSub": null},
      url:'/server1',
      templateUrl: '/partials/server1.html',
      controller: 'server1Controller'
    })
    .state('server2', {
      params: {"meName": null, "meSub": null},
      url: '/server2',
      templateUrl: '/partials/server2.html',
      controller: 'server2Controller'
    })
    .state('server3', {
      params: {'meName': null, "meSub": null},
      url: '/server3',
      templateUrl: '/partials/server3.html',
      controller: 'server3Controller'
    })
    .state('server4', {
      params: {'meName': null, "meSub": null},
      url: '/server4',
      templateUrl: '/partials/server4.html',
      controller: 'server4Controller'
    })
    .state('users', {
      params: {'meName': null, "meSub": null},
      url: '/users',
      templateUrl: '/partials/users.html'
    })
    .state('kuaidi', {
      params: {'meName': null, "meSub": null},
      url: '/kuaidi',
      templateUrl: '/partials/danhao.html',
      controller: 'kuaidiController'
    })
}]);
