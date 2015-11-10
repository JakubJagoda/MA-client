import ShoppingListItemApiService from "../shoppingListItemApi.service";
import ShoppingListItemEditHelper from "./shoppingListItemEditHelper.service";
import ui = angular.ui;

export default function ():angular.IDirective {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'modules/shoppingList/shoppingListItem/edit/shoppingListItemEdit.html',
        controller($stateParams:ui.IStateParamsService, $state:ui.IStateService,
                   ShoppingListItemEditHelper:ShoppingListItemEditHelper, ShoppingListItemApi:ShoppingListItemApiService) {
            this.loading = true;

            ShoppingListItemApi.getShoppingListItem($stateParams['shoppingListId'], $stateParams['itemId'])
                .then(shoppingListItem => {
                    this.shoppingListItem = shoppingListItem;
                    this.loading = false;
                });

            this.deleteItem = () => {
                ShoppingListItemEditHelper.showDeleteConfirmation()
                    .then(isConfirmed => {
                        if (!isConfirmed) {
                            return;
                        }

                        ShoppingListItemApi.deleteShoppingItem($stateParams['shoppingListId'], $stateParams['itemId'])
                            .then(() => {
                                $state.go('shoppingLists.view', {
                                    shoppingListId: $stateParams['shoppingListId']
                                });
                            });
                    });
            };

            this.saveItem = () => {
                ShoppingListItemApi.saveShoppingItem($stateParams['shoppingListId'], $stateParams['itemId'], this.shoppingListItem)
                    .then(() => {
                        $state.go('shoppingLists.view', {
                            shoppingListId: $stateParams['shoppingListId']
                        });
                    });
            };
        },
        controllerAs: 'shoppingListItemEditCtrl'
    };
}
