import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public isSignIn: boolean = true;
  public form: FormGroup;
  public loading = false;
  public error = '';

  constructor (private fb:FormBuilder,
               private authenticationService: AuthenticationService,
               private route: ActivatedRoute,
               private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public get f() { return this.form.controls; }

  public registry(): void {
    this.authenticationService.registry(this.f.email.value, this.f.password.value, this.f.name.value)
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
