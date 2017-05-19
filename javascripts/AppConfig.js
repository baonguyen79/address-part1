app.run(function(FIREBASE_CONFIG) {              //run config from AppConstants.js
  firebase.initializeApp(FIREBASE_CONFIG);
});


app.config(function($routeProvider) {
  $routeProvider
  .when('/items/list', {
     templateUrl: 'partials/item-list.html',
     controller: 'ItemListCtrl'
  })
  .otherwise('/items/list' )
});
