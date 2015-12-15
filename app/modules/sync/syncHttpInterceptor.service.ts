import SyncService from "./sync.service";

export default function SyncHttpInterceptor($injector:angular.auto.IInjectorService, REST_API_ADDRESS:string) {
    const isRequestToTheApi = config => {
        return config.url.indexOf(REST_API_ADDRESS) === 0;
    };

    return {
        request(config) {
            const Sync = $injector.get<SyncService>('Sync');
            const guid = Sync.getGuid();

            if (!guid) {
                return config;
            }

            if (isRequestToTheApi(config)) {
                config.headers['X-Device-Id'] = guid;
            }

            return config;
        }
    };
}
