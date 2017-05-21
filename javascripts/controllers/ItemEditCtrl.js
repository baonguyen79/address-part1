app.controller("ItemEditCtrl", function($location, $routeParams, $scope, ItemFactory)  {
  $scope.addressBook = {};
  
  ItemFactory.getSingleItem($routeParams.id).then((results) => {

    $scope.addressBook.id = $routeParams.id;
  	$scope.addressBook = results.data;

  }).catch((error) => {
  	console.log("getSingleItem error", error);
  })

  $scope.addItem = () => {
    console.log("editItem" , $scope.addressBook.id);
  	ItemFactory.editItem($scope.addressBook).then ((response) => {
  		$location.url('/item/list');
      $scope.addressBook = {};
  	}).catch((error) => {
  		console.log("addItem error", error)
  	});
  };


});

