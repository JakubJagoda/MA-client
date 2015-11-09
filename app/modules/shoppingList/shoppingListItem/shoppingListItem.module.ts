import './edit/shoppingListItemEdit.module';
import ShoppingListItemApiService from './shoppingListItemApi.service';

angular.module('MA.shoppingList.shoppingListItem', ['MA.shoppingList.shoppingListItem.edit'])
    .service('ShoppingListItemApi', ShoppingListItemApiService)
;
