import ProductsListApiService from "./productsListApi.service";
export default function ProductsListComponent():angular.IDirective {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'modules/products/list/productsList.html',
        controller(ProductsListApi:ProductsListApiService) {
            this.loading = true;

            ProductsListApi.getProducts().then(products => {
                this.products = products;
                this.loading = false;
            });

            this.addProduct = productId => {
                ProductsListApi.addProduct(productId);
            };
        },
        controllerAs: 'productsListCtrl'
    }
}
