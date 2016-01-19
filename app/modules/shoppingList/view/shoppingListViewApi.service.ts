import AppStateService from "../../appState/appState.service";
import IPromise = angular.IPromise;
import IHttpPromise = angular.IHttpPromise;
import SyncService from "../../sync/sync.service";

export default class ShoppingListViewApiService {
    constructor(private $http:angular.IHttpService, private REST_API_ADDRESS:string, private AppState:AppStateService,
                private Sync:SyncService) {
    }

    private getUrlPrefix() {
        return `${this.REST_API_ADDRESS}/users/${this.AppState.getUserId()}/shopping-lists`;
    }

    getShoppingListItems(shoppingListId:number):IPromise<ShoppingList.IShoppingList> {
        return this.$http
            .get<ShoppingList.IGetShoppingListResponse>(`${this.getUrlPrefix()}/${shoppingListId}`)
            .then(response => {
                Object.getOwnPropertyNames(response.data.meta)
                    .forEach(productId => {
                        this.Sync.addProduct(Number(productId), {
                            subtotal: response.data.meta[productId].subtotals[this.Sync.getGuid()] || 0,
                            overall: response.data.meta[productId].overall
                        });
                    });

                return response.data.data;
            });
    }

    addItem(shoppingListId:number, itemName:string):IPromise<ShoppingList.IShoppingListItem> {
        return this.$http
            .post<ShoppingList.IAddShoppingListItemResponse>(`${this.getUrlPrefix()}/${shoppingListId}/items`, {
                itemName,
                amount: 0
            }).then(response => response.data.data);
    }

    addNestedShoppingList(parentShoppingListId:number, name:string):IPromise<ShoppingList.IShoppingList> {
        return this.$http
            .post<ShoppingList.IAddShoppingListItemResponse>(this.getUrlPrefix(), {
                name,
                parentShoppingListId
            }).then(response => response.data.data);
    }

    deleteItem(shoppingListId:number, itemId:number):IHttpPromise<void> {
        return this.$http.delete<void>(`${this.getUrlPrefix()}/${shoppingListId}/items/${itemId}`)
    }

    saveItem(shoppingListId:number, shoppingListItem:ShoppingList.IShoppingListItem) {
        const product = this.Sync.getProduct(shoppingListItem.id);
        const currentSubtotal = product.subtotal;
        const currentOverall = product.overall;
        const newSubtotal = currentSubtotal + (shoppingListItem.amount - currentOverall);
        this.Sync.updateProduct(shoppingListItem.id, newSubtotal, shoppingListItem.amount);
    }

    sync(shoppingListId:number, items:ShoppingList.IShoppingListItem[]) {
        const meta = {};

        for (const shoppingListItem of items) {
            meta[shoppingListItem.id] = this.Sync.getProduct(shoppingListItem.id);
        }

        return this.$http.put<void>(`${this.getUrlPrefix()}/${shoppingListId}`, {
            data: {items},
            meta
        }).then(() => {
            return this.getShoppingListItems(shoppingListId)
                .then(shoppingList => shoppingList.shoppingListItems);
        });
    }
}
