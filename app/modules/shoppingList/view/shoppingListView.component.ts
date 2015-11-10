import ShoppingListApiService from "./shoppingListViewApi.service";
import ui = angular.ui;

export default function ShoppingListViewComponent():angular.IDirective {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'modules/shoppingList/view/shoppingListView.html',
        controller($stateParams:ui.IStateParamsService, $state:ui.IStateService, ShoppingListViewApi:ShoppingListApiService) {
            this.loading = true;

            ShoppingListViewApi.getShoppingListItems($stateParams['shoppingListId']).then(shoppingList => {
                this.shoppingListItems = shoppingList.shoppingListItems;
                this.loading = false;
            });

            this.addItems = () => {
                $state.go('shoppingLists.addItems', {
                    shoppingListId: $stateParams['shoppingListId']
                });
            };

            this.editItem = itemId => {
                $state.go('shoppingLists.editItem', {
                    shoppingListId: $stateParams['shoppingListId'],
                    itemId
                });
            };

            this.goBack = () => {
                $state.go('shoppingLists.list');
            };
        },
        controllerAs: 'shoppingListViewCtrl'
    };
}
