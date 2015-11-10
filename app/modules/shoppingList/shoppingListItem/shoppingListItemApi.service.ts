import IPromise = angular.IPromise;
import IHttpPromise = angular.IHttpPromise;
import AppStateService from "../../appState/appState.service";

interface IShoppingListItem {
    id: number;
    amount: number;
    name: string;
}

interface IGetShoppingListItemsResponse {
    data: IShoppingListItem;
}

interface IGetProductsResponse {
    data: IProduct[];
}

interface IProduct {
    id: number;
    name: string;
}

export default class ShoppingListItemApiService {
    private $http: angular.IHttpService;
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

    getShoppingListItem(shoppingListId:number, itemId:number):IPromise<IShoppingListItem> {
        return this.$http
            .get<IGetShoppingListItemsResponse>(`${this.getUrlPrefix()}/${shoppingListId}/products/${itemId}`)
            .then(response => response.data.data);
    }

    deleteShoppingItem(shoppingListId:number, itemId:number):IHttpPromise<void> {
        return this.$http.delete<void>(`${this.getUrlPrefix()}/${shoppingListId}/products/${itemId}`);
    }

    saveShoppingItem(shoppingListId:number, itemId:number, shoppingListItem:IShoppingListItem):IHttpPromise<void> {
        return this.$http.put<void>(`${this.getUrlPrefix()}/${shoppingListId}/products/${itemId}`, {shoppingListItem});
    }

    getProducts():PromiseLike<IProduct[]> {
        return this.$http.get<IGetProductsResponse>(`${this.REST_API_ADDRESS}/products`)
            .then(productsResponse => productsResponse.data.data);
    }

    addProduct(shoppingListId:number, productId:number) {
        return this.$http.post(`${this.getUrlPrefix()}/${shoppingListId}/products`, {
            productId,
            amount: 0
        });
    }
}
