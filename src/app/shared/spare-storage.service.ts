import { HttpClient, HttpHeaders } from "@angular/common/http";
import { makeBindingParser } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { map } from "rxjs-compat/operator/map";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { Company } from "../company/company.model";

@Injectable({
    providedIn: "root"
})
export class SpareStarageService {
   constructor(private http: HttpClient,
        private recipeService: RecipeService) { }

    // storeRecipes() {
    //     const recipe = this.recipeService.getRecipes();
    //     this.http
    //         .post("http://localhost:8888/recipes", recipe)
    //         .subscribe(response => {
    //             console.log(response);
    //         })
    // }

    fetchCompanies() {
        // httpHeader: HttpHeaders = new HttpHeaders();

         {
            Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzb21lc2hAZ21haWwuY29tIiwiZXhwIjoxNjcwODYyNDgzLCJpYXQiOjE2NzA4NDQ0ODN9.YJT051YSwGfnLCtBV4TlXjsJwxn0nNflWz7pXZeb4I1RsZCAzI7-_Wq5VfjcCZ5w1GnOCLIApw-rktpxPr2ipQ"
        }
        this.http
            .get<[Company[]]>("http://localhost:8081/company",)
            .subscribe(response => {
                console.log(response[0]);
                // return response[0].map(recipe => {
                //     return {
                //         ...recipe,
                //         ingredients : recipe.ingredients ? recipe.ingredients : []
                //     }
                // })
                // this.recipeService.setRecipe(response);
            })
    }
}