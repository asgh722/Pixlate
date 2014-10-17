var app = angular.module('app', ['ngDialog']);
//function GalleryController($scope, ngDialog){
app.controller('GalleryController', function ($scope, ngDialog){
    //my API key for Flickr
	alert("Working");
    var apiKey = '65c71fb9600f5393c38727c33b6b18be';
	$scope.maxDisplay=4;
	$scope.photos=[];
	$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=65c71fb9600f5393c38727c33b6b18be&tags=spanish+sign&safe_search=1&format=json&jsoncallback=?',
   function(data){
        //loop through each picture in the set
        $.each(data.photos.photo, function(i,item){
            //contruct a URL for each image
            var photoURL ={
				url: 'https://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg', //change to fit our own get requests later
				language: "Spanish",
				translation: "Translation"
			};
			$scope.photos.push(photoURL);  
        });
		$scope.$apply(function(){
			$scope.images=[];
			$scope.images=$scope.photos.slice();
			$scope.images.length=$scope.maxDisplay;
		});
		
   });
	$scope.expandGallery = function(){
		$scope.maxDisplay = $scope.maxDisplay + 4;
		alert($scope.photos.length);
		$scope.images=[];
		$scope.images=$scope.photos.slice();
		$scope.images.length=$scope.maxDisplay;
	};

	$scope.open = function (image) {
		$scope.popupImage = image;
		$scope.$apply(function(){
		});
		ngDialog.open({
			template: 'firstDialogId',
			scope: $scope,
			className: 'ngdialog-theme-plain',
			preCloseCallback: function () {
			}
		});
	};
	$scope.openLogin = function (image) {
		$scope.popupImage = image;
		$scope.$apply(function(){
		});
		ngDialog.open({
			template: 'login',
			scope: $scope,
			className: 'ngdialog-theme-default',
			preCloseCallback: function () {
			}
		});
	};
	$scope.openRegister = function (image) {
		$scope.popupImage = image;
		$scope.$apply(function(){
		});
		ngDialog.open({
			template: 'register',
			scope: $scope,
			preCloseCallback: function () {
			}
		});
	};
});
