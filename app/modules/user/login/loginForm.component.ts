import LoginFormHelperService from './loginFormHelper.service';

export default function LoginFormComponent():angular.IDirective {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'modules/user/login/loginForm.html',
        controller($state:angular.ui.IStateService, LoginFormHelper:LoginFormHelperService){
            this.login = () => {
                LoginFormHelper
                    .login(this.username, this.password)
                    .then(() => {
                        $state.go('shoppingLists.list');
                    })
                    .catch(e => {
                        LoginFormHelper.showIncorrectCredentialsAlert()
                    });
            };
        },
        controllerAs: 'loginFormCtrl'
    }
}
