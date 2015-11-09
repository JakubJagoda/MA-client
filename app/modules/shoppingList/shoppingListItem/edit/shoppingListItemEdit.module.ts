import ShoppingListItemEditComponent from './shoppingListItemEdit.component';
import ShoppingListItemEditHelperService from "./shoppingListItemEditHelper.service";

angular.module('MA.shoppingList.shoppingListItem.edit', [])
    .directive('shoppingListItemEdit', ShoppingListItemEditComponent)
    .service('ShoppingListItemEditHelper', ShoppingListItemEditHelperService)
;
