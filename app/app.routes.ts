export default function appRoutesConfig($urlRouterProvider:angular.ui.IUrlRouterProvider,
                         DEFAULT_STATE:string) {
    //https://github.com/angular-ui/ui-router/issues/600
    $urlRouterProvider.otherwise($injector => {
        var $state:angular.ui.IStateService = $injector.get('$state');
        $state.go(DEFAULT_STATE);
    });
}
