import { Component } from "@angular/core";
import { DataStarageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private dataStoreService: DataStarageService) {}

    onSaveData() {
        console.log("Click");
        
        this.dataStoreService.storeRecipes();    
    }

    onFetchData() {
        this.dataStoreService.fetchRecipes();    

    }

}