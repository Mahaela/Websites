
import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.ts';
@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
 
})
export class RecipesComponent implements OnInit {
    selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
