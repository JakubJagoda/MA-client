import ShoppingListListApiService from "./shoppingListListApi.service";
export default function ShoppingListListComponent():angular.IDirective {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'modules/shoppingList/list/shoppingListList.html',
        controller(ShoppingListListApi:ShoppingListListApiService) {
            this.loading = true;
            ShoppingListListApi.getShoppingLists().then(shoppingLists => {
                this.shoppingLists = shoppingLists;
                this.loading = false;
            });
        },
        controllerAs: 'shoppingListListCtrl'
    }
}
