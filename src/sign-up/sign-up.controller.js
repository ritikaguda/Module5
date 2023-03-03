(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService','UserInfoService'];
function SignUpController(MenuService, UserInfoService) {

  var signUpCtrl = this;

  signUpCtrl.submit = function () {
    var promise = MenuService.getMenuItem(signUpCtrl.user.favorite);
    signUpCtrl.successMsg = '';
    signUpCtrl.error = '';
    signUpCtrl.menuitem = '';

    promise.then(function (response) {
      console.log(response);
      if (response) {
        UserInfoService.saveInfo(response, signUpCtrl.user);
        signUpCtrl.successMsg = "Your information has been saved"
      } else {
        signUpCtrl.error = "No such menu number exists";
      }
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });

  };
}

})();
