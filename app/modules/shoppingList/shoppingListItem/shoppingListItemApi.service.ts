import GenericApiHelper from "../../../genericApiHelper.service";
import IPromise = angular.IPromise;
import IHttpPromise = angular.IHttpPromise;

interface IShoppingListItem {
    id: number;
    amount: number;
    name: string;
}

interface IGetShoppingListItemsResponse {
    data: IShoppingListItem;
}

export default class ShoppingListItemApiService extends GenericApiHelper {
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
}
