app.run(function(FIREBASE_CONFIG) {              //run config from AppConstants.js
  firebase.initializeApp(FIREBASE_CONFIG);
});


app.config(function($routeProvider) {
  $routeProvider
  .when('/items/list', {
     templateUrl: 'partials/item-list.html',
     controller: 'ItemListCtrl'
  })
  .when('/item/edit/:id', {
      templateUrl: 'partials/item-new.html',
      controller: 'ItemEditCtrl'
  })
  .when('/item/new', {
      templateUrl: 'partials/item-new.html',
      controller: 'ItemNewCtrl'
    })
  .otherwise('/items/list' )
});
