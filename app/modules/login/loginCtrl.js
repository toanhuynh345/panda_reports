/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 24 Dec 2015
    Description : Controller to handle Login module
    Change Log
    s.no      date    author     description     


 ===========================================================*/

login.controller("loginCtrl", ['$rootScope', '$scope', '$state', '$location', 'Flash','apiService',
function ($rootScope, $scope, $state, $location, Flash, apiService) {
        var vm = this;

        vm.getUser = {};
        vm.setUser = {};
        vm.signIn = true;

        //access login_
        vm.login = function (data) {
            apiService.create('login', {"username": data.Username, "password": data.Password}).then(function(success){
                 $state.go('app.dashboard', {obj:success.data.shop});
                 /// SAVE LOCAL STORE
                 localStorage.setItem("userData", success);
                 console.log("Storage Saved!");
            },function(fail){
                 Flash.create('danger', fail.data.data, 'large-text');
            })
        };

        //get registration details

    }]);

