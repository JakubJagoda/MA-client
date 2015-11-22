import IPromise = angular.IPromise;
import ShoppingListViewApiService from "./shoppingListViewApi.service";
import IShoppingListItem = ShoppingList.IShoppingListItem;

export default class ShoppingListViewHelperService {
    constructor(private $q:angular.IQService, private ShoppingListViewApi:ShoppingListViewApiService) {

    }

    getShoppingListItems(shoppingListId:number):IPromise<ShoppingList.IShoppingListItem[]> {
        return this.ShoppingListViewApi
            .getShoppingListItems(shoppingListId)
            .then(shoppingList => shoppingList.shoppingListItems);
    }

    addItemToShoppingList(shoppingListId:number):IPromise<ShoppingList.IShoppingListItem> {
        return this.$q((resolve, reject) => {
            navigator.notification.prompt('Product name: ', result => {
                const itemName = result.input1;
                this.ShoppingListViewApi
                    .addItem(shoppingListId, itemName)
                    .then(resolve)
                    .catch(reject);
            }, 'Add item');
        });
    }

    deleteItemFromShoppingList(shoppingListId:number, item:IShoppingListItem):PromiseLike<boolean> {
        return this.$q<boolean>((resolve, reject) => {
            navigator.notification.confirm('Are you sure?', pressedButton => {
                const OK_BUTTON = 1;

                if (pressedButton === OK_BUTTON) {
                    return this.ShoppingListViewApi
                        .deleteItem(shoppingListId, item.id)
                        .then(() => resolve(true))
                        .catch(e => reject(e));
                } else {
                    return resolve(false);
                }
            });
        });
    }

    removeItemFromLocalList(localItemsList:ShoppingList.IShoppingListItem[], item:IShoppingListItem) {
        const index = localItemsList.findIndex(shoppingListItem => shoppingListItem.id === item.id);
        localItemsList.splice(index, 1);
    }

    saveItem(shoppingListId:number, item:ShoppingList.IShoppingListItem) {
        return this.ShoppingListViewApi.saveItem(shoppingListId, item);
    }

    incrementItem(shoppingListId:number, item: ShoppingList.IShoppingListItem) {
        item.amount += 1;
        return this.saveItem(shoppingListId, item);
    }

    decrementItem(shoppingListId:number, item: ShoppingList.IShoppingListItem) {
        if (item.amount > 0) {
            item.amount -= 1;
            return this.saveItem(shoppingListId, item);
        }
    }
}
