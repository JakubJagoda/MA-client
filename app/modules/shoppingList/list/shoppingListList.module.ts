import ShoppingListListComponent from './shoppingListList.component';
import ShoppingListListApiService from './shoppingListListApi.service';

angular.module('MA.shoppingList.list', [])
    .directive('shoppingListList', ShoppingListListComponent)
    .service('ShoppingListListApi', ShoppingListListApiService)
;
