app.directive('tableData', function( $timeout, $state ) {
	return {
		restrict: 'E',
		scope	: {
			columns 	: '=',
			data		: '=',
			source 		: '@'
		},
		templateUrl	: 'app/directives/table.html',
		controllerAs: "ctrl",
		controller	: function ($scope, Flash, apiService) {
			var ctrl = this;
			ctrl.updateRow = updateRow;
			ctrl.deleteRow = deleteRow;
			ctrl.addRow    = addRow;

			function addRow() {

				$state.go('app.update', {obj: {
					data 		: false,
					source      : $scope.source,
					event 		: "insert" 
				}});
			}
			function updateRow(item) {
				$state.go('app.update', {obj: {
					data 		: item,
					source      : $scope.source,
					event 		: "update" 
				}});
			}
			function deleteRow(id){
				var r = confirm("Bạn có chắc muốn xóa.");
				if (r == true) {
					apiService.create($scope.source+"/delete", {"id": id}).then(function(success){
						Flash.create('success', "Deleted", 'large-text');
						$scope.data.splice(  $scope.data.map(function(index){ return index.id }).indexOf(id), 1 ) 
					},function(fail){
						Flash.create('danger', fail.data.data, 'large-text');
					});
				} 
			}
		}
	};
});