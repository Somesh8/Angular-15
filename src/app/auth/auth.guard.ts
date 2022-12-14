import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { take } from "rxjs-compat/operator/take";
import { map } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log("Hey ", this.authService.isLoggedIn);
        
        if (this.authService.isLoggedIn !== true) {
            window.alert('Access Denied, Login is Required to Access This Page!');
            this.router.navigate(['login']);
        }
        return true;
    }
}