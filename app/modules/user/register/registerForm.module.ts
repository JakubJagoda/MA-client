import RegisterFormComponent from './registerForm.component';
import RegisterFormHelperService from './registerFormHelper.service';

angular.module('MA.user.register', [])
    .directive('registerForm', RegisterFormComponent)
    .service('RegisterFormHelper', RegisterFormHelperService)
;
