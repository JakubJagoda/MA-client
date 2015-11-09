import RegisterFormHelperService from './registerFormHelper.service';

export default function RegisterComponent():angular.IDirective {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'modules/user/register/registerForm.html',
        controller(RegisterFormHelper:RegisterFormHelperService) {
            this.register = () => {
                RegisterFormHelper
                    .registerUser(this.username, this.password)
                    .then(() => {
                        this.success = true;
                    })
                    .catch(e => {
                        this.error = e.message || e;
                    });
            };
        },
        controllerAs: 'registerCtrl'
    };
}
