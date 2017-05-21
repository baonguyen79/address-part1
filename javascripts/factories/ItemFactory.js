app.factory("ItemFactory", function($http, $q, FIREBASE_CONFIG){  
  
  let getItemList = () => {
    let itemz = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBook.json`)
      .then((fbItems) => {
        let itemCollection = fbItems.data;
        if (itemCollection !== null) {
            Object.keys(itemCollection).forEach((key) => {
            itemCollection[key].id=key;
            itemz.push(itemCollection[key]);
          });
        }
        resolve(itemz);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  let deletz = (itemId) => {
    console.log ("deletz" , itemId)
    return $q((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/addressBook/${itemId}.json`)
      .then((resultz) => {
        resolve(resultz);
      }).catch((error) => {
        reject(error);
      });
    })
  };

  let editItem = (item) => {
    console.log("editItem:" , item);
    return $q((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/addressBook/${item.id}.json`, 
        JSON.stringify({
          name: item.name,
          addressLine1: item.addressLine1,
          addressLine2: item.addressLine2,
          tel: item.tel
        })
        ).then((resultz) => {
          resolve(resultz);
        }).catch((error) => {
          reject(error);
        });
    });
  };


  let getSingleItem = (id) => {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/addressBook/${id}.json`)
      .then ((resultz) => {
        resultz.data.id = id;
        resolve(resultz);
      }).catch((error) => {
         reject(error);
      });
    });
  };


  let postNewItem = (newItem) => {
    return $q((resolve, reject) =>{
      $http.post(`${FIREBASE_CONFIG.databaseURL}/addressBook.json`, JSON.stringify(newItem))
      .then((resultz) => {
        resolve(resultz);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  

  




  return {getItemList:getItemList, deletz:deletz, editItem:editItem, getSingleItem:getSingleItem , postNewItem:postNewItem};


});