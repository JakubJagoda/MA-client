export default function shoppingListRoutesConfig($stateProvider:angular.ui.IStateProvider) {
    $stateProvider.state('shoppingLists', {
        abstract: true,
        url: '/',
        template: '<ui-view></ui-view>'
    }).state('shoppingLists.view', {
        url: 'shoppingLists/{shoppingListId:int}',
        template: '<shopping-list></shopping-list>'
    }).state('shoppingLists.editItem', {
        url: 'shoppingLists/{shoppingListId:int}/item/{itemId:int}',
        template: '<shopping-list-item-edit></shopping-list-item-edit>'
    });
}
