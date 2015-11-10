import ShoppingListItemApiService from "../shoppingListItemApi.service";
export default function ():angular.IDirective {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'modules/shoppingList/shoppingListItem/add/shoppingListItemAdd.html',
        controller($stateParams:angular.ui.IStateParamsService, $state:angular.ui.IStateService,
                   ShoppingListItemApi:ShoppingListItemApiService) {
            this.loading = true;

            ShoppingListItemApi.getProducts().then(products => {
                this.products = products;
                this.loading = false;
            });

            this.addProduct = productId => {
                ShoppingListItemApi.addProduct($stateParams['shoppingListId'], productId);
            };

            this.goBack = () => {
                $state.go('shoppingLists.view', {
                    shoppingListId: $stateParams['shoppingListId']
                });
            };
        },
        controllerAs: 'shoppingListItemAddCtrl'
    }
}
