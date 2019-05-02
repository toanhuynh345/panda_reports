dashboard.controller("MenuController", ['$rootScope', '$scope', 'Flash', 'apiService',
    function ($rootScope, $scope, Flash, apiService) {
        var ctrl = this;
        ctrl.listMenu = [];
        apiService.create('menu', {}).then(function(success){
            ctrl.listMenu = success.data ;
        },function(fail){
            Flash.create('danger', fail.data.data, 'large-text');
        })
        function validate(data) {

        }
}]);
