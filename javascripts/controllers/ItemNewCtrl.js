app.controller("ItemNewCtrl", function($http, $location, $q, $scope, FIREBASE_CONFIG, ItemFactory) {

$scope.addItem = () => {
    console.log("addItem" , $scope.addressBook);
    ItemFactory.postNewItem($scope.addressBook)
    .then(() => {
      $location.url("/items/list");
      $scope.Item = {};
    }).catch((error) => {
      console.log("Add error", error);
    });
  };
});


