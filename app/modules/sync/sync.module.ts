import SyncService from './sync.service';
import SyncHttpInterceptor from './syncHttpInterceptor.service'

angular.module('MA.sync', [])
    .service('Sync', SyncService)
    .factory('SyncHttpInterceptor', SyncHttpInterceptor);
