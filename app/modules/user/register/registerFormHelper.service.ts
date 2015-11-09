export default class RegisterHelperService {
    private $http: angular.IHttpService;
    private REST_API_ADDRESS: string;

    constructor($http: angular.IHttpService, REST_API_ADDRESS: string) {
        this.$http = $http;
        this.REST_API_ADDRESS = REST_API_ADDRESS;
    }

    registerUser(name: string, password: string) {
        return this.$http.post(`${this.REST_API_ADDRESS}/users`, {name, password});
    }
}
