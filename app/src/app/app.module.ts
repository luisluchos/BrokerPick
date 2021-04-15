import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component';
import { HomeComponent } from './components/views/home/home.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { TradesComponent } from './components/trades/trades.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavBarComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    TradesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'luisluchos.eu.auth0.com',
      clientId: 'EHFVk3EpOoS3bFaEhoL2jMS571czgDI3'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
