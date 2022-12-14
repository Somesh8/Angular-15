import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStarageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    isAuthenticated: boolean = false;
    private userSub: Subscription;

    constructor(private dataStoreService: DataStarageService,
                private authService: AuthService) {}
    
    ngOnInit(): void {
        this.userSub = this.authService.userAuth.subscribe(user => {
            this.isAuthenticated = !user ? false : true; //!!user
        });
    }

    onSaveData() {
        this.dataStoreService.storeRecipes();    
    }

    onFetchData() {
        this.dataStoreService.fetchRecipes();    

    }

    onLogout() {
        this.authService.logout();
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }
}