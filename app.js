var app = angular.module('gemStore', []);

app.controller("productDetails", ['$http', function($http){
	//this.products = gems;
	var store = this;
    store.products = [];
	
    $http.get('/store-products.json').success(function(data){
      store.products = data;
    });
}]);



app.directive("productTabs", function(){
	return {
		restrict : 'E',
		templateUrl : 'TabController.html',
		controller : function(){
			this.tab = 1;
			this.setTab = function(newValue){
			  this.tab = newValue;
			};

			this.isSet = function(tabName){
			  return this.tab === tabName;
			};
		},
		controllerAs : 'tab'
	};
});

app.controller("GalleryController", function(){
	this.img = 0;
	this.changeImage = function(newValue){
		return this.img = newValue;
	};
});

app.controller('ReviewController', function(){
	this.review = {};
	this.addReview = function(product){
		product.reviews.push(this.review);
		this.review = {};
		this.reviewForm.$setPristine();
	};
});