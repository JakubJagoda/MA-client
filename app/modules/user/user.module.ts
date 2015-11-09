import './login/loginForm.module';
import './register/registerForm.module';
import userRoutesConfig from './user.routes';

angular.module('MA.user', ['MA.user.login', 'MA.user.register'])
    .config(userRoutesConfig)
;
