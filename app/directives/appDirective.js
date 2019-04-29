app.directive('tableData', function( $timeout, $state ) {
	return {
		restrict: 'E',
		scope	: {
			columns 	: '=',
			data		: '=',
			source 		: '='
		},
		templateUrl	: 'app/directives/table.html',
		controllerAs: "ctrl",
		controller	: function ($scope, Flash, apiService) {
			var ctrl = this;
			ctrl.updateRow = updateRow;
			ctrl.deleteRow = deleteRow;


			function updateRow(id) {
				$state.go('app.update', {obj: id});
			}
			function deleteRow(id){
				var r = confirm("Bạn có chắc muốn xóa.");
				if (r == true) {
					// apiService.create($scope.source+"/delete", {"id": id}).then(function(success){
					// //
					// },function(fail){
					// 	Flash.create('danger', fail.data.data, 'large-text');
					// })
					Flash.create('danger', "??", 'large-text');
				} 
			}
		}
	};
});