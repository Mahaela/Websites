import { Routes } from "@angular/router";

import { RecipeStartComponent } from './recipe-start.component.ts';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';

export const RECIPE_ROUTES: Routes = [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipesEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipesEditComponent }
];