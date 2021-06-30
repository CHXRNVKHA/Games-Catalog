import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.css']
})
export class SignInUpComponent implements OnInit {

  public isSignIn: boolean = true;
  form:FormGroup;

  constructor (private fb:FormBuilder,
               private authService: AuthenticationService,
               private router: Router) {
    
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  ngOnInit(): void {
  }

  onSignIn() {
    this.isSignIn = true;
  }

  onSignUp() {
    this.isSignIn = false;
  }

  login() {
    const val = this.form.value;
    if (val.email && val.password) {
      this.authService.login(val.email, val.password)
        .subscribe(() => {
            console.log('User is logged in');
            this.router.navigateByUrl('/');
          }
        );
    }
  }

}
