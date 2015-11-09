import AppStateService from './appState.service';
import AppStateHttpInterceptor from './appStateHttpInterceptor.service';

angular.module('MA.appState', [])
    .service('AppState', AppStateService)
    .factory('AppStateHttpInterceptor', AppStateHttpInterceptor)
;
