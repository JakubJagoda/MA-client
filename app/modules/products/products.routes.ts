export default function productsRoutesConfig($stateProvider:angular.ui.IStateProvider) {
    $stateProvider.state('products', {
        abstract: true,
        url: '/',
        template: '<ui-view></ui-view>'
    }).state('products.list', {
        url: 'products',
        template: '<products-list></products-list>'
    });
}
