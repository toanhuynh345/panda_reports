dashboard.controller("HomeController", ['$rootScope', '$scope', 'Flash', 'apiService', 
function ($rootScope, $scope, Flash, apiService) {
    var vm = this;
    vm.listShop = [];
    apiService.create('shop', {"username": "admin"}).then(function(success){
      vm.listShop = success.data ; 
    },function(fail){
      Flash.create('danger', fail.data.data, 'large-text');
    })
    function validate(data) {	
      
    }
}]);

