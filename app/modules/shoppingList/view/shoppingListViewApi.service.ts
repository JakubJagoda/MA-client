import AppStateService from "../../appState/appState.service";

interface IShoppingListItem {
    id: number;
    amount: number;
    name: string;
}

interface IGetShoppingListItemsResponse {
    data: {
        id: number,
        shoppingListItems: IShoppingListItem[]
    };
}

export default class ShoppingListApiService {
    private $http: angular.IHttpService;
    private REST_API_ADDRESS:string;
    private AppState:AppStateService;

    constructor($http:angular.IHttpService, REST_API_ADDRESS:string, AppState:AppStateService) {
        this.$http = $http;
        this.REST_API_ADDRESS = REST_API_ADDRESS;
        this.AppState = AppState;
    }

    getShoppingListItems(shoppingListId: number) {
        return this.$http
            .get<IGetShoppingListItemsResponse>(`${this.REST_API_ADDRESS}/users/${this.AppState.getUserId()}/shopping-lists/${shoppingListId}`)
            .then(response => response.data.data);
    }
}
