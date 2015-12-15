import ShoppingListViewHelperService from "./shoppingListViewHelper.service";
import ui = angular.ui;

export default function ShoppingListViewComponent():angular.IDirective {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'modules/shoppingList/view/shoppingListView.html',
        controller($stateParams:ui.IStateParamsService, $state:ui.IStateService, ShoppingListViewHelper:ShoppingListViewHelperService) {
            this.loading = true;

            ShoppingListViewHelper.getShoppingListItems($stateParams['shoppingListId'])
                .then(shoppingListItems => {
                    this.shoppingListItems = shoppingListItems;
                    this.loading = false;
                });

            this.addItem = () => {
                ShoppingListViewHelper.addItemToShoppingList($stateParams['shoppingListId'])
                    .then(newShoppingListItem => this.shoppingListItems.push(newShoppingListItem));
            };

            this.incrementItem = item => {
                ShoppingListViewHelper.incrementItem($stateParams['shoppingListId'], item);
            };

            this.decrementItem = item => {
                ShoppingListViewHelper.decrementItem($stateParams['shoppingListId'], item);
            };

            this.sync = () => {
                ShoppingListViewHelper.sync($stateParams['shoppingListId'], this.shoppingListItems)
                    .then(shoppingListItems => {
                        this.shoppingListItems = shoppingListItems;
                    });
            };

            this.removeItem = item => {
                ShoppingListViewHelper.deleteItemFromShoppingList($stateParams['shoppingListId'], item)
                    .then(wasRemoved => {
                        if (!wasRemoved) {
                            return;
                        }

                        ShoppingListViewHelper.removeItemFromLocalList(this.shoppingListItems, item);
                    });
            };

            this.goBack = () => {
                $state.go('shoppingLists.list');
            };
        },
        controllerAs: 'shoppingListViewCtrl'
    };
}
