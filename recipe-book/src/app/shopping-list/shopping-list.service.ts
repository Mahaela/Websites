import { Ingredient } from "../ingredient.ts";
export class ShoppingListService {
    private items: Ingredient[] = [];
    constructor() { }

    getItems() {
        return this.items;
    }

    addItems(ings: Ingredient[]) {
        Array.prototype.push.apply(this.items, ings);
    }
}
