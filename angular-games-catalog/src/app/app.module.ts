import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { AppBarComponent } from './explore-page/app-bar/app-bar.component';
import { FiltersComponent } from './explore-page/filters/filters.component';
import { GameCardComponent } from './explore-page/game-card/game-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    SignInUpComponent,
    ExplorePageComponent,
    AppBarComponent,
    FiltersComponent,
    GameCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
