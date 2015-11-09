import AppStateService from "./modules/appState/appState.service";

export function appConfigPhase($compileProvider:angular.ICompileProvider,
                               $httpProvider:angular.IHttpProvider, DEBUG:boolean) {

    $httpProvider.useApplyAsync(true);
    $httpProvider.interceptors.push('AppStateHttpInterceptor');

    $compileProvider.debugInfoEnabled(DEBUG);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|ms-appx):/);
}

export function appRunPhase($rootScope:angular.IRootScopeService, $state:angular.ui.IStateService, DEBUG:boolean,
                            AppState:AppStateService, DEFAULT_STATE:string) {
    $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
        if (fromState.abstract) {
            $state.go(DEFAULT_STATE);
        }

        if (DEBUG) {
            console.error(error);
        }
    });

    $rootScope.$on('$stateChangeStart', (event, toState) => {
        if (!AppState.isUserLoggedIn() && (!toState.data || !toState.data.isPublic)) {
            event.preventDefault();
            $state.go(DEFAULT_STATE);
        }
    });
}
