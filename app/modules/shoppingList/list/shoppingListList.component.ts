import ShoppingListListApiService from "./shoppingListListApi.service";
import AppStateService from "../../appState/appState.service";
import IStateService = angular.ui.IStateService;
export default function ShoppingListListComponent():angular.IDirective {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'modules/shoppingList/list/shoppingListList.html',
        controller($state: IStateService, ShoppingListListApi:ShoppingListListApiService, AppState:AppStateService) {
            this.loading = true;
            ShoppingListListApi.getShoppingLists().then(shoppingLists => {
                this.shoppingLists = shoppingLists;
                this.loading = false;
            });

            this.logout = () => {
                AppState.logout();
                $state.go('user.login');
            };
        },
        controllerAs: 'shoppingListListCtrl'
    }
}
