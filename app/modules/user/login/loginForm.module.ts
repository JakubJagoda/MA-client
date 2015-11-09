import LoginFormComponent from './loginForm.component';
import LoginFormHelperService from './loginFormHelper.service';

angular.module('MA.user.login', [])
    .directive('loginForm', LoginFormComponent)
    .service('LoginFormHelper', LoginFormHelperService)
;
