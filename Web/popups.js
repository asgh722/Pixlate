var app = angular.module('exampleDialog', ['ngDialog']);
alert("pop");
// Example of how to set default values for all dialogs
app.config(['ngDialogProvider', '$compileProvider', function (ngDialogProvider, $compileProvider) {
	$compileProvider.debugInfoEnabled(false);
	ngDialogProvider.setDefaults({
		className: 'ngdialog-theme-plain',
		plain: false,
		showClose: true,
		closeByDocument: false,
		closeByEscape: false
	});
}]);

app.controller('MainCtrl', function ($scope, $rootScope, ngDialog) {
	$scope.open = function () {
		ngDialog.open({
			template: 'firstDialogId',
			controller: 'InsideCtrl',
			preCloseCallback: function () {
			}
		});
	};
});

app.controller('InsideCtrl', function ($scope, ngDialog) {
	$scope.openSecond = function () {
		ngDialog.open({
			template: '<h3>Boo!</h3>',
			plain: true,
			closeByEscape: true
		});
	};
});
