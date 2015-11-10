export default function shoppingListRoutesConfig($stateProvider:angular.ui.IStateProvider) {
    $stateProvider.state('shoppingLists', {
        abstract: true,
        url: '/',
        template: '<ui-view></ui-view>'
    }).state('shoppingLists.list', {
        url: 'shoppingLists',
        template: '<shopping-list-list></shopping-list-list>'
    }).state('shoppingLists.view', {
        url: 'shoppingLists/{shoppingListId:int}',
        template: '<shopping-list-view></shopping-list-view>'
    }).state('shoppingLists.addItems', {
        url: 'shoppingLists/{shoppingListId:int}/items',
        template: '<shopping-list-item-add></shopping-list-item-add>'
    }).state('shoppingLists.editItem', {
        url: 'shoppingLists/{shoppingListId:int}/items/{itemId:int}',
        template: '<shopping-list-item-edit></shopping-list-item-edit>'
    });
}
