import ProductsListComponent from './productsList.component';
import ProductsListApiService from './productsListApi.service';

angular.module('MA.products.list', [])
    .directive('productsList', ProductsListComponent)
    .service('ProductsListApi', ProductsListApiService)
;
