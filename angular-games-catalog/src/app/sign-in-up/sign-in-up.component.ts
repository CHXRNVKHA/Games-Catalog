import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.css']
})
export class SignInUpComponent implements OnInit {

  public isSignIn: boolean = true;
  public form:FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor (private fb:FormBuilder,
               private authenticationService: AuthenticationService,
               private route: ActivatedRoute,
               private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  onSignIn() {
    this.isSignIn = true;
  }

  onSignUp() {
    this.isSignIn = false;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value)
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
