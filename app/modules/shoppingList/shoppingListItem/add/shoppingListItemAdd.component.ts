import ShoppingListItemApiService from "../shoppingListItemApi.service";
import IQService = angular.IQService;
export default function ():angular.IDirective {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'modules/shoppingList/shoppingListItem/add/shoppingListItemAdd.html',
        controller($stateParams:angular.ui.IStateParamsService, $state:angular.ui.IStateService,
                   ShoppingListItemApi:ShoppingListItemApiService, $q:IQService) {
            this.loading = true;

            const getNotAddedProducts = (products:any[]):any[] => {
                return products.filter(product => {
                    return this.shoppingListItems.findIndex(shoppingListItem => {
                            return shoppingListItem.id === product.id;
                        }) === -1;
                });
            };

            //$q.all sucks, as it demand all the promises to have the same type
            //or at least it's not that easy to achieve as in Promise.all
            $q.all<any[]>([
                <any>ShoppingListItemApi.getShoppingListItems($stateParams['shoppingListId']),
                <any>ShoppingListItemApi.getProducts()
            ]).then(values => {
                this.shoppingListItems = values[0];
                this.products = getNotAddedProducts(values[1]);

                this.loading = false;
            });

            this.addProduct = productId => {
                ShoppingListItemApi.addProduct($stateParams['shoppingListId'], productId);
                this.shoppingListItems.push({id: productId});
                this.products = getNotAddedProducts(this.products);
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
