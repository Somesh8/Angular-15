import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { AuthToken } from "./auth-token.model";
import { User } from "./user.model";

interface AuthResponseData {
    userId: number,
    fullname: string,
    email: string,
    password: string,
    age: number,
    roles: []
}

interface AuthLoginResponseData {
    token: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    API_URL: "http://localhost:8081/api/v1/auth/";

    userAuth = new Subject<AuthToken>();

    constructor(private http: HttpClient,
        private router: Router) { }

    signup(user: User) {
        return this.http.post<AuthResponseData>("http://localhost:8081/api/v1/auth/register",
            user
        )
            .pipe(
                catchError(this.handleError), tap(resData => {
                    this.handleAuthentication(user.email, "dummy");
                })
            );
    }

    login(email: string, password: string) {
        return this.http.post<AuthLoginResponseData>("http://localhost:8081/api/v1/auth/login",
            {
                email,
                password
            }
        ).pipe(catchError(this.handleError), tap(resData => {
            this.handleAuthentication(email, resData.token);
        }));
    }

    autoLogin() {
        const userData: { email: string, token: string } = JSON.parse(localStorage.getItem("userData") as any);
        if (!userData) {
            return;
        }

        const loadedUserAuth = new AuthToken(userData.email, userData.token)
        console.log("Loaded : ", loadedUserAuth);
        this.userAuth.next(loadedUserAuth);
    }

    logout() {
        this.userAuth.next(null as any);
        this.router.navigate(['/login']);
        localStorage.removeItem("userData");
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('userData')!);
        console.log("User ", user);
        return user !== null ? true : false;
    }

    private handleAuthentication(email: string, token: string) {
        const authToken = new AuthToken(email, token);
        this.userAuth.next(authToken);
        localStorage.setItem("userData", JSON.stringify(authToken));
    }

    private handleError(errorResp: HttpErrorResponse) {
        let errorMessage = "Something went wrong..!"
        if (!errorResp.error || !errorResp.error.message) {
            return throwError(errorMessage);
        } else {
            errorMessage = errorResp.error.message;
        }
        return throwError(errorMessage);
    }
}