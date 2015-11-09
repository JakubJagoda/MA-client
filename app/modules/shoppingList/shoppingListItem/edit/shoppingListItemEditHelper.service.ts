export default class ShoppingListItemEditHelper {
    private $q:angular.IQService;

    constructor($q:angular.IQService) {
        this.$q = $q;
    }

    showDeleteConfirmation():PromiseLike<boolean> {
        return this.$q<boolean>((resolve, reject) => {
            navigator.notification.confirm('Are you sure?', pressedButton => {
                resolve(pressedButton === 1);
            });
        });
    }
}
