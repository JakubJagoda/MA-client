export default function userRoutesConfig($stateProvider:angular.ui.IStateProvider) {
    $stateProvider.state('user', {
        abstract: true,
        url: '/',
        template: '<ui-view></ui-view>'
    }).state('user.login', {
        url: 'login',
        template: '<login-form></login-form>',
        data: {
            isPublic: true
        }
    }).state('user.register', {
        url: 'register',
        template: '<register-form></register-form>',
        data: {
            isPublic: true
        }
    });
}
