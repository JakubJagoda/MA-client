import ShoppingListViewComponent from './shoppingListView.component';
import ShoppingListViewApi from './shoppingListViewApi.service';

angular.module('MA.shoppingList.view', [])
    .directive('shoppingListView', ShoppingListViewComponent)
    .service('ShoppingListViewApi', ShoppingListViewApi)
;
