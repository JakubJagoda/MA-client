import IPromise = angular.IPromise;
import IJwtHelper = angular.jwt.IJwtHelper;
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

    private static LS_TOKEN_KEY = 'MA_TOKEN';

    constructor(private $http:angular.IHttpService, private storage: angular.localStorage.ILocalStorageService,
                private jwtHelper: IJwtHelper, private REST_API_ADDRESS:string) {

        this.setToken(this.storage.get(AppStateService.LS_TOKEN_KEY));
    }

    login(name:string, password:string):IPromise<void> {
        return this.$http
            .post<ILoginResponse>(`${this.REST_API_ADDRESS}/tokens`, {name, password})
            .then(response => {
                const responseData = response.data.data;
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
        if (!token) {
            this.token = null;
            this.userId = null;
            this.storage.remove(AppStateService.LS_TOKEN_KEY);
            return;
        }

        this.token = token;
        this.storage.set(AppStateService.LS_TOKEN_KEY, token);

        const userId = (<any>this.jwtHelper.decodeToken(this.token)).id;
        this.setUserId(userId);
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
