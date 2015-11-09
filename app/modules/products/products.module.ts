import productsRoutesConfig from './products.routes';
import './list/productsList.module';

angular.module('MA.products', ['MA.products.list'])
    .config(productsRoutesConfig)
;
