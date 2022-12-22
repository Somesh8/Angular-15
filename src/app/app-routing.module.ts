import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { CompanyComponent } from "./company/company.component";

const appRoutes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: AuthComponent },
    { path: "company", component: CompanyComponent },
    { path: "recipes", loadChildren: () => import("./recipes/recipes.module").then(m => m.RecipesModule)},
    { path: "shopping-list", loadChildren: () => import("./shopping-list/shopping-list.module").then(m => m.ShoppingListModule)}
    // { path: "shopping-list", component: ShoppingListComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]  //,
    // providers: [AuthGuard]
})
export class AppRoutingModule { }