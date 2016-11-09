appService.factory('menuService', function(){
  var menuObj = {
    "快递服务": [
      {"url":"server1","name":"申请记录"},
      {"url":"server2","name":"申请快递"},
      {"url":"server3","name":"代填记录"},
      {"url":"server4","name":"代填申请"}
    ],
    "发送快递":[
      {"url":"kuaidi", "name":"填写单号"}
    ],
    "用户管理":[
      {"url":"users", "name":"用户管理"}
    ],
    "部门管理":[
      {"url":"dart", "name":"部门管理"}
    ]
  };
  return {
    menuList:menuObj
  };
})
