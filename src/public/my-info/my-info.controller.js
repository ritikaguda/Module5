(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userInfo'];
function MyInfoController(userInfo) {
  var $myInfoCtrl = this;
  $myInfoCtrl.userInfo = userInfo;
  console.log($myInfoCtrl.userInfo);
}

})();