import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
      new Recipe(
          "Dosa", 
          "Made from furmentaed rice and lentilse",
          "https://i1.wp.com/pixahive.com/wp-content/uploads/2020/09/Indian-Dosa-98502-pixahive.jpg?fit=778%2C518&ssl=1",
          [
            new Ingredient("Rice", 5),
            new Ingredient("Lentils", 2),
            new Ingredient("Potato", 1),
            new Ingredient("Tomato", 1),
          ]
          ),
      new Recipe(
          "Idli",
          "Healthy Breakfast option",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Idli_-_A_Traditional_Indian_Food.JPG/1200px-Idli_-_A_Traditional_Indian_Food.JPG?20150610113223",
          [
            new Ingredient("Rice", 5),
            new Ingredient("Lentils", 2),
            new Ingredient("Peas", 3),
          ]),
      new Recipe(
        "Puran Poli",
        "Very Sweet dish. Enjoy with Milk and Ghee.",
        "https://recipes.timesofindia.com/thumb/msid-55045560,width-1600,height-900/55045560.jpg",
        [
          new Ingredient("Chana Dal",3),
          new Ingredient("Sugar",2),
        ]
      )
    ];

  constructor(private slService : ShoppingListService){}
  
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index:number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients : Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  setRecipe(recipe:[Recipe[]]) {
    this.recipes = recipe[0];
    this.recipesChanged.next(this.recipes.slice());
  }
  
  addRecipe(recipe:Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, recipe:Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number) {
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}