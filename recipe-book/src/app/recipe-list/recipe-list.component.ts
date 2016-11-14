import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.ts';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',

})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = []
    recipe = new Recipe('dummy', 'dummy','../../assets/trump.jpg');
    @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe) {
      this.recipeSelected.emit(recipe);
  }
}
