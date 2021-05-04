import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HomeComponent } from './views/home/home.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { TradesComponent } from './components/trades/trades.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PurchaseSnippetComponent } from './components/purchase-snippet/purchase-snippet.component';
import { UserPrivateWalletComponent } from './components/user-private-wallet/user-private-wallet.component';
import { UserWalletSnippetComponent } from './components/user-wallet-snippet/user-wallet-snippet.component';
import { UserCardSnippetComponent } from './components/user-card-snippet/user-card-snippet.component';
import { NoImagesPipe } from './components/pipes/no-images.pipe';
import { MarginComponent } from './components/margin/margin.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserWalletDetailsComponent } from './components/user-wallet-details/user-wallet-details.component';
import { WalletHistoricalComponent } from './components/wallet-historical/wallet-historical.component';
import { SearchComponent } from './components/search/search.component';
import { SocialComponent } from './components/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavBarComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    TradesComponent,
    PurchaseComponent,
    PurchaseSnippetComponent,
    UserPrivateWalletComponent,
    UserWalletSnippetComponent,
    UserCardSnippetComponent,
    NoImagesPipe,
    MarginComponent,
    UserListComponent,
    UserWalletDetailsComponent,
    WalletHistoricalComponent,
    SearchComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
