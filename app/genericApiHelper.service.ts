import AppStateService from "./modules/appState/appState.service";

export default class GenericApiHelper {
    protected $http: angular.IHttpService;
    protected REST_API_ADDRESS:string;
    protected AppState:AppStateService;

    constructor($http:angular.IHttpService, REST_API_ADDRESS:string, AppState:AppStateService) {
        'ngInject';
        this.$http = $http;
        this.REST_API_ADDRESS = REST_API_ADDRESS;
        this.AppState = AppState;
    }
}
