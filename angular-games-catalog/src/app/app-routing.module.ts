import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { LoginComponent } from './login/login.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/explore', pathMatch: 'full' },
  { path: 'explore', component: ExplorePageComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
