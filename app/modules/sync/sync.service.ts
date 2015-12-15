import ILocalStorageService = angular.localStorage.ILocalStorageService;

interface IStore {
    subtotal: number;
    overall: number;
}

export default class SyncService {
    private localGuid:string;
    private static LS_GUID_KEY = 'MA_DEVICE_GUID';
    private productMetaBucket: Map<number, IStore>;

    constructor(private storage:ILocalStorageService) {
        this.productMetaBucket = new Map();
        this.localGuid = this.getDeviceGuid();
    }

    private getDeviceGuid():string {
        const savedGuid = this.storage.get(SyncService.LS_GUID_KEY);
        let guid;

        if (savedGuid) {
            guid = savedGuid;
        } else {
            guid = String(Math.random());
            this.storage.set(SyncService.LS_GUID_KEY, guid);
        }

        return guid;
    }

    getGuid():string {
        return this.localGuid;
    }

    addProduct(productId: number, subtotalBucket: IStore) {
        this.productMetaBucket.set(productId, subtotalBucket);
    }

    updateProduct(productId: number, subtotal: number, overall: number) {
        if (!this.productMetaBucket.has(productId)) {
            this.addProduct(productId, {
                subtotal: 0,
                overall: 0
            });
        }

        this.productMetaBucket.set(productId, {
            subtotal,
            overall
        });
    }

    getProduct(productId: number): IStore {
        return this.productMetaBucket.get(productId);
    }
}
