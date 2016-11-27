import { Injectable } from '@angular/core';
import { Recipe } from './recipe.ts';
import { Ingredient } from './ingredient.ts';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very Tasty', '../assets/Schnitzel-7_edited.jpg', [new Ingredient('French Fries', 2),
            new Ingredient('Pork Meat', 1)]),
        new Recipe('Summer Salad', 'Okayish', '../assets/salad.jpg', [new Ingredient('lettuce', 1),
            new Ingredient('tomato', 1)])
    ];
  constructor() { }

  getRecipes() {
      return this.recipes;
  }

  getRecipe(id: number) {
      return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
      this.recipes.splice(this.recipes.indexOf(recipe),1);
  }
}
