(function() {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);


function UserInfoService() {
  var service = this;
  var userInfo = null;

  service.saveInfo = function(menuItem, user) {
    userInfo = {};  
    userInfo.menuItem = menuItem;
    userInfo.user = user;
    // console.log(userInfo);
    // console.log(menuItem);
  };

  service.getUserInfo = function (user) {
    return userInfo;
  };

  service.getUser = function (user) {
    return userInfo.user;
  };

  service.getItem = function (user) {
    return userInfo.menuItem;
  };

}

})();