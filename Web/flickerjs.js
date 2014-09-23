function flickrController($scope){
    //my API key for Flickr
    var apiKey = '65c71fb9600f5393c38727c33b6b18be';
    var baseImages = [];
	
	$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=65c71fb9600f5393c38727c33b6b18be&tags=spanish+sign&safe_search=1&format=json&jsoncallback=?',
   function(data){
        //loop through each picture in the set
        $.each(data.photos.photo, function(i,item){
            //contruct a URL for each image
            var photoURL = 'https://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg';
            baseImages.push(photoURL);  
        });
		//alert(baseImages.length);
		//$scope.images=baseImages.slice();
		//$scope.images.length=12;
		//alert($scope.images[0]);
		$scope.$apply(function(){
			$scope.images=[];
			$scope.images=baseImages.slice();
			$scope.images.length=12;
		});
   });

}

