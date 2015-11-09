import GenericApiHelper from "../../../genericApiHelper.service";
import IHttpPromise = angular.IHttpPromise;

interface IGetProductsResponse {
    data: IProduct[];
}

interface IProduct {
    id: number;
    name: string;
}

export default class ProductsListApiService extends GenericApiHelper {
    getProducts():PromiseLike<IProduct[]> {
        return this.$http.get<IGetProductsResponse>(`${this.REST_API_ADDRESS}/products`)
            .then(productsResponse => productsResponse.data.data);
    }

    addProduct(productId: number) {
        return this.$http.post(`${this.REST_API_ADDRESS}/users/${this.AppState.getUserId()}/shopping-lists/1/products`, {
            productId,
            amount: 0
        });
    }
}
