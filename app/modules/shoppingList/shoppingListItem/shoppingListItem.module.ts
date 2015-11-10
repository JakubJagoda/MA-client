import './edit/shoppingListItemEdit.module';
import './add/shoppingListItemAdd.module';
import ShoppingListItemApiService from './shoppingListItemApi.service';

angular.module('MA.shoppingList.shoppingListItem', ['MA.shoppingList.shoppingListItem.edit', 'MA.shoppingList.shoppingListItem.add'])
    .service('ShoppingListItemApi', ShoppingListItemApiService)
;
