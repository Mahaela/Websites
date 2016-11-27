import { Component, OnInit, } from '@angular/core';
import { Recipe } from '../recipe.ts';
import { Ingredient } from '../ingredient.ts'; 
import { RecipeService } from '../recipe.service.ts';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = []
    //recipe = new Recipe('dummy', 'dummy','../../assets/trump.jpg');
   

    constructor(private recipeService: RecipeService) { }

  ngOnInit() {
      this.recipes = this.recipeService.getRecipes();
  }
  
}
