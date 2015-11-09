import ShoppingListViewComponent from './shoppingListView.component';
import ShoppingListViewApi from './shoppingListViewApi.service';

angular.module('MA.shoppingList.view', [])
    .directive('shoppingList', ShoppingListViewComponent)
    .service('ShoppingListViewApi', ShoppingListViewApi)
;
