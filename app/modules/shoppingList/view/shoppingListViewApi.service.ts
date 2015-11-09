import GenericApiHelper from "../../../genericApiHelper.service";

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

export default class ShoppingListApiService extends GenericApiHelper {
    getShoppingListItems(shoppingListId: number) {
        return this.$http
            .get<IGetShoppingListItemsResponse>(`${this.REST_API_ADDRESS}/users/${this.AppState.getUserId()}/shopping-lists/${shoppingListId}`)
            .then(response => response.data.data);
    }
}
