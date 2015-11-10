import IPromise = angular.IPromise;
import AppStateService from "../../appState/appState.service";

interface IGetShoppingListResponse {
    data: IShoppingList[];
}

interface IShoppingList {
    id: number;
    name: string;
}

export default class ShoppingListListApiService {
    private $http: angular.IHttpService;
    private REST_API_ADDRESS:string;
    private AppState:AppStateService;

    constructor($http:angular.IHttpService, REST_API_ADDRESS:string, AppState:AppStateService) {
        this.$http = $http;
        this.REST_API_ADDRESS = REST_API_ADDRESS;
        this.AppState = AppState;
    }

    getShoppingLists():IPromise<IShoppingList[]> {
        return this.$http.get<IGetShoppingListResponse>(`${this.REST_API_ADDRESS}/users/${this.AppState.getUserId()}/shopping-lists`)
            .then(response => response.data.data);
    }
}
