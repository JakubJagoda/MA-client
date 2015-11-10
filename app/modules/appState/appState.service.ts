import IPromise = angular.IPromise;
interface IUserData {
    id: number;
    name: string;
}

interface ILoginResponse {
    data: {
        user: IUserData;
        token: string;
    };
}

export default class AppStateService {
    private token: string;
    private userId: number;

    private $http:angular.IHttpService;
    private REST_API_ADDRESS:string;
    private storage: angular.localStorage.ILocalStorageService;

    private static LS_TOKEN_KEY = 'MA_TOKEN';

    constructor($http:angular.IHttpService, storage: angular.localStorage.ILocalStorageService,
                REST_API_ADDRESS:string) {
        this.$http = $http;
        this.REST_API_ADDRESS = REST_API_ADDRESS;
        this.storage = storage;
    }

    login(name:string, password:string):IPromise<void> {
        return this.$http
            .post<ILoginResponse>(`${this.REST_API_ADDRESS}/tokens`, {name, password})
            .then(response => {
                const responseData = response.data.data;
                this.setUserId(responseData.user.id);
                this.setToken(responseData.token);
            });
    }

    logout() {
        this.setToken('');
    }

    getToken():string {
        return this.token;
    }

    setToken(token:string) {
        this.token = token;
        this.storage.set(AppStateService.LS_TOKEN_KEY, token);
    }

    isUserLoggedIn():boolean {
        return !!this.getToken();
    }

    getUserId():number {
        return this.userId;
    }

    setUserId(userId:number) {
        this.userId = userId;
    }
}
