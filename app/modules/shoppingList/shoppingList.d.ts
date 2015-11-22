declare namespace ShoppingList {
    interface IShoppingListItem {
        id: number;
        name: string;
        amount: number;
    }

    interface IShoppingList {
        id: number,
        shoppingListItems: IShoppingListItem[]
    }

    interface IGetShoppingListResponse {
        data: IShoppingList;
    }

    interface IAddShoppingListItemResponse {
        data: IShoppingListItem;
    }
}
