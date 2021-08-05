import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { first } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public hide = true;
  public password = new FormControl('', [Validators.required]);
  public email = new FormControl('', [Validators.required, Validators.email]);
  public isSignIn: boolean = true;
  public form: FormGroup;
  public loading = false;
  public error = '';

  constructor (
    private fb:FormBuilder,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }
  
  public getErrorMessage(): any {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.email.hasError('email')) {
      return 'Not a valid email';
    }
  }

  public login(): void {
    this.loading = true;
    this.authenticationService.login(this.email.value, this.password.value)
    .pipe(first())
    .subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/explore';
          this.router.navigate([returnUrl]);
        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
    });
  }

}
