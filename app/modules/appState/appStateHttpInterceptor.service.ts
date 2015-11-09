import AppStateService from "./appState.service";

export default function AppStateHttpInterceptor($q:angular.IQService, $injector:angular.auto.IInjectorService, REST_API_ADDRESS:string) {
    const isRequestToTheApi = config => {
        return config.url.indexOf(REST_API_ADDRESS) === 0;
    };

    return {
        request(config) {
            const AppState = $injector.get<AppStateService>('AppState');
            const token = AppState.getToken();

            if (!token) {
                return config;
            }

            if (isRequestToTheApi(config)) {
                config.headers.Authorization = 'Bearer ' + token;
            }

            return config;
        },
        responseError(rejection) {
            if (isRequestToTheApi(rejection.config) && rejection.status === 401) {
                const AppState = $injector.get<AppStateService>('AppState');
                AppState.logout();
            }
            return $q.reject(rejection);
        }
    };
}
