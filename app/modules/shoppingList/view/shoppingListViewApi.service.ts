import AppStateService from "../../appState/appState.service";
import IPromise = angular.IPromise;
import IHttpPromise = angular.IHttpPromise;

export default class ShoppingListViewApiService {
    private $http:angular.IHttpService;
    private REST_API_ADDRESS:string;
    private AppState:AppStateService;

    constructor($http:angular.IHttpService, REST_API_ADDRESS:string, AppState:AppStateService) {
        this.$http = $http;
        this.REST_API_ADDRESS = REST_API_ADDRESS;
        this.AppState = AppState;
    }

    private getUrlPrefix() {
        return `${this.REST_API_ADDRESS}/users/${this.AppState.getUserId()}/shopping-lists`;
    }

    getShoppingListItems(shoppingListId:number):IPromise<ShoppingList.IShoppingList> {
        return this.$http
            .get<ShoppingList.IGetShoppingListResponse>(`${this.getUrlPrefix()}/${shoppingListId}`)
            .then(response => response.data.data);
    }

    addItem(shoppingListId:number, itemName:string):IPromise<ShoppingList.IShoppingListItem> {
        return this.$http
            .post<ShoppingList.IAddShoppingListItemResponse>(`${this.getUrlPrefix()}/${shoppingListId}/items`, {
                itemName,
                amount: 0
            }).then(response => response.data.data);
    }

    deleteItem(shoppingListId:number, itemId:number):IHttpPromise<void> {
        return this.$http.delete<void>(`${this.getUrlPrefix()}/${shoppingListId}/items/${itemId}`)
    }

    saveItem(shoppingListId:number, shoppingListItem:ShoppingList.IShoppingListItem):IHttpPromise<void> {
        return this.$http.put<void>(`${this.getUrlPrefix()}/${shoppingListId}/items/${shoppingListItem.id}`, {shoppingListItem});
    }
}
