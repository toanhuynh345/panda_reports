dashboard.controller("SkillController", ['$rootScope', '$scope', 'Flash', 'apiService', 
function ($rootScope, $scope, Flash, apiService) {
    var vm = this;
    vm.listUser = [];
    apiService.create('user', {"username": "admin"}).then(function(success){
      vm.listUser = success.data.map(function (data) {
          return data.user;
      }) ; 
    },function(fail){
      Flash.create('danger', fail.data.data, 'large-text');
    })
    function validate(data) {
      
    }
}]);

