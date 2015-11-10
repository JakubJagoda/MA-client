import AppStateService from "../../appState/appState.service";

export default class LoginFormHelperService {
    private $http: angular.IHttpService;
    private REST_API_ADDRESS:string;
    private AppState:AppStateService;

    constructor($http:angular.IHttpService, REST_API_ADDRESS:string, AppState:AppStateService) {
        this.$http = $http;
        this.REST_API_ADDRESS = REST_API_ADDRESS;
        this.AppState = AppState;
    }

    login(name:string, password:string) {
        return this.AppState.login(name, password);
    }

    showIncorrectCredentialsAlert() {
        return navigator.notification.alert(`Login failed!`, () => {});
    }
}
