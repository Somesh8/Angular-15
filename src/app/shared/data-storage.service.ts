import { HttpClient } from "@angular/common/http";
import { makeBindingParser } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { map } from "rxjs-compat/operator/map";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
    providedIn: "root"
})
export class DataStarageService {
    constructor(private http: HttpClient,
        private recipeService: RecipeService) { }

    storeRecipes() {
        const recipe = this.recipeService.getRecipes();
        this.http
            .post("http://localhost:8888/recipes", recipe)
            .subscribe(response => {
                console.log(response);
            })
    }

    fetchRecipes() {

        this.http
            .get<[Recipe[]]>("http://localhost:8888/recipes")
            .subscribe(response => {
                this.recipeService.setRecipe(response);
            })
    }
}