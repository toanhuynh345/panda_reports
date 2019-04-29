dashboard.controller("UpdateController", ['$rootScope', '$scope', 'Flash', 'apiService', 
  function ($rootScope, $scope,  Flash, apiService) {
      var ctrl = this,
      source   = "user"; 
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

      ctrl.listAttr = Attr[source]; 

      function submitForm(){
        var data = {};
        Attr[source].forEach(function(element) {
          data[element.model] = element.value 
        });
        apiService.create('user/insert', data).then(function(success){
          console.log(success);
        },function(fail){
          Flash.create('danger', fail.data.data, 'large-text');
        })
      }
      
     
  }]);

