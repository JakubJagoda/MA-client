import './view/shoppingListView.module';
import './shoppingListItem/shoppingListItem.module';
import shoppingListRoutesConfig from './shoppingList.routes';

angular.module('MA.shoppingList', ['MA.shoppingList.view', 'MA.shoppingList.shoppingListItem'])
    .config(shoppingListRoutesConfig)
;
