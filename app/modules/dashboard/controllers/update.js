dashboard.controller("UpdateController", ['$rootScope', '$scope', 'Flash', 'apiService', '$state',
  function ($rootScope, $scope,  Flash, apiService, $state ) {
      var ctrl = this;
      ctrl.source   = angular.copy($state.params.obj.source || {});
      ctrl.data     = angular.copy($state.params.obj.data || {});
      ctrl.event     = angular.copy($state.params.obj.event || {});
      ctrl.submitForm = submitForm;
      var Attr = {};
      Attr["user"] = [
        {model: "username", label:"User name", value:"", type:"text"},
        {model: "password", label:"Password", value:"", type:"text"},
        {model: "shopId", label:"Shop", value:"", type:"option"},
        {model: "active", label:"Active", value:1, type:"checkbox"},
        {model: "role", label:"Role", value:"ADMIN", type:"text"},
      ];

      Attr["shop"] = [
        {model: "name", label:"User name", value:"", type:"text"},
        {model: "host", label:"Host", value:"", type:"text"},
        {model: "address", label:"Adress", value:"", type:"text"},
        {model: "phone", label:"Phone", value:"", type:"text"},
        {model: "fax", label:"Fax", value:"", type:"text"},
        {model: "logo", label:"Logo", value:"", type:"text"},
        {model: "active", label:"Active", value:1, type:"checkbox"},
      ];

      ctrl.listAttr = Attr[ctrl.source]; 

      function init(){
        if(ctrl.event == "update"){
          Attr[ctrl.source].push({model: "id", value: "", isHiding: true})
          Attr[ctrl.source].forEach(function(element) {
             element.value = ctrl.data[element.model];
          });
        }
      }

      init();

      function submitForm(){
        var data = {};
        Attr[ctrl.source].forEach(function(element) {
          data[element.model] = element.value 
        });
        apiService.create(ctrl.source+'/'+ctrl.event, data).then(function(success){
          $state.go( ctrl.source == "shop" ? 'app.home' : 'app.skills' );
          Flash.create('success', "Deleted", 'large-text');
        },function(fail){
          Flash.create('danger', fail.data.data, 'large-text');
        })
      }
      
     
  }]);

