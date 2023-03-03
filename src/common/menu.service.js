(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (cat) {
    // I changed category to cat as argument above, and config to configu below, just to experiment
    var config = {};
    if (cat) {
      config.params = {'category': cat};
    }

    return $http.get(ApiPath + '/menu_items.json', configu).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (itemCode) {
    console.log(itemCode);
    var config = {};
    if (itemCode) {
      config.params = {'short_name': itemCode};
    }

    return $http.get(ApiPath + '/menu_items/'+ itemCode + '.json').then(function (response) {
      console.log(response)
      return response.data;
    },
    function errorCallback(response){ 
       // handle 500/404 etc errors... 
      console.log("callbackerror");
    }
    )
    .catch(function (error) {
      console.log("error")
      return error;    
    });
  };
}



})();
