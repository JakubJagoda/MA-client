import GenericApiHelper from "../../../genericApiHelper.service";
import IPromise = angular.IPromise;

interface IGetShoppingListResponse {
    data: IShoppingList[];
}

interface IShoppingList {
    id: number;
    name: string;
}

export default class ShoppingListListApiService extends GenericApiHelper {
    getShoppingLists():IPromise<IShoppingList[]> {
        return this.$http.get<IGetShoppingListResponse>(`${this.REST_API_ADDRESS}/users/${this.AppState.getUserId()}/shopping-lists`)
            .then(response => response.data.data);
    }
}
