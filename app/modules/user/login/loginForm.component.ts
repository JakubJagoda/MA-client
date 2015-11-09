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
                        //TODO: API is prepared for many shopping lists per user, add them here too
                        $state.go('shoppingLists.view', {shoppingListId: 1});
                        //navigator.notification.alert(`Login succeded! Returned data: ${response.data}`, () => {});
                    })
                    .catch(e => {
                        navigator.notification.alert(`Login failed! Returned data: ${e.message || e}`, () => {});
                    });
            };

            this.register = () => {
                $state.go('user.register');
            };
        },
        controllerAs: 'loginFormCtrl'
    }
}
