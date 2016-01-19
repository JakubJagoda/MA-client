declare namespace ShoppingList {
    interface IShoppingListItem {
        id: number;
        name: string;
        amount: number;
        rating: number;
    }

    interface IShoppingList {
        id: number,
        name: string;
        shoppingListItems?: IShoppingListItem[];
        nestedShoppingLists?: IShoppingList[];
        parentShoppingList?: number;
    }

    interface IGetShoppingListResponse {
        data: IShoppingList;
        meta: any;
    }

    interface IAddShoppingListItemResponse {
        data: IShoppingListItem;
    }

    interface IAddNestedShoppingListResponse {
        data: IAddNestedShoppingListResponse
    }
}
