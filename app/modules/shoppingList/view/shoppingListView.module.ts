import ShoppingListViewComponent from './shoppingListView.component';
import ShoppingListViewApi from './shoppingListViewApi.service';
import ShoppingListViewHelper from "./shoppingListViewHelper.service";

angular.module('MA.shoppingList.view', [])
    .directive('shoppingListView', ShoppingListViewComponent)
    .service('ShoppingListViewApi', ShoppingListViewApi)
    .service('ShoppingListViewHelper', ShoppingListViewHelper)
;
