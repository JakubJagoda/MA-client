import './view/shoppingListView.module';
import './list/shoppingListList.module';
import shoppingListRoutesConfig from './shoppingList.routes';

angular.module('MA.shoppingList', ['MA.shoppingList.view', 'MA.shoppingList.list'])
    .config(shoppingListRoutesConfig)
;
