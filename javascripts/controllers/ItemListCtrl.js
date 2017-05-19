app.controller("ItemListCtrl", function($scope, ItemFactory) {
	$scope.items = [];

	let getItems = () => {
		ItemFactory.getItemList().then((itemz) => {
			$scope.items = itemz;
		}).catch((error) => {
			console.log("getItem error" , error)
		});
	};

	getItems();

	$scope.deleteItem = (id) => {
		console.log("delete id:" , id);
		// ItemFactory.deletz(id).then(() => {
		// 	getItems();
		// }).catch((error) => {
		// 	console.log("deleteItem error", error);
		// });
	};


 	$scope.changeItem = (item) => {
 		console.log("change ojbect" , item);
 		// ItemFactory.editItem(item).then(() => {
 			
 		// }).catch((error) => {
 		// 	console.log("inputChange error", error)
 		// });
 	};
});