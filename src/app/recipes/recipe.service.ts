import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
      new Recipe("Dosa", "Made from furmentaed rice and lentilse", "https://i1.wp.com/pixahive.com/wp-content/uploads/2020/09/Indian-Dosa-98502-pixahive.jpg?fit=778%2C518&ssl=1"),
      new Recipe("Idli", "Healthy Breakfast option", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Idli_-_A_Traditional_Indian_Food.JPG/1200px-Idli_-_A_Traditional_Indian_Food.JPG?20150610113223")
    ];

    getRecipes() {
      return this.recipes.slice();
    }
}