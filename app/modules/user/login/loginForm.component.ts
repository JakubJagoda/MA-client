import LoginFormHelperService from './loginFormHelper.service';

export default function LoginFormComponent():angular.IDirective {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'modules/user/login/loginForm.html',
        controller($state:angular.ui.IStateService, LoginFormHelper:LoginFormHelperService){
            this.login = () => {
                console.log('DUPA');
                LoginFormHelper
                    .login(this.username, this.password)
                    .then(() => {
                        console.info('login succeeded');
                        $state.go('shoppingLists.list');
                    })
                    .catch(e => {
                        console.error('login failed');
                        LoginFormHelper.showIncorrectCredentialsAlert()
                    });
            };
        },
        controllerAs: 'loginFormCtrl'
    }
}
