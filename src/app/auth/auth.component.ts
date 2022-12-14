import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = "";
  // let authObs: Observable<any>;

  constructor(private authService: AuthService, private router: Router) { }

  OnSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    if (this.isLoginMode) {
      this.authService.login(email, password).subscribe(resData => {
        this.isLoading = false;
        this.router.navigate(['/recipes']); 
      },
      errorMessage => {
        this.isLoading = false;
        this.error = errorMessage;
      });
    } else {

      const user = new User("From AngularUI", email, password, 15);

      this.authService.signup(user).subscribe(resData => {
        this.isLoading = false;
      },
        errorMessage => {
          this.isLoading = false;
          this.error = errorMessage;
        });
      form.reset();
    }
  }
}
