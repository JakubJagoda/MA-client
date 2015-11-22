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
    });
}
