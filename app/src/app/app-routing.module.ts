import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { TradesComponent } from './components/trades/trades.component';
import { UserWalletComponent } from './components/user-wallet/user-wallet.component';
import { HomeComponent } from './components/views/home/home.component';
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component';
import { TradesResolver } from './services/trades.resolver';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'purchase', pathMatch: 'full', component: PurchaseComponent,canActivate: [AuthGuard],resolve: {trades: TradesResolver}},
  {path: 'userwallet', pathMatch: 'full', component: UserWalletComponent,canActivate: [AuthGuard]},
  {path:'404', component: PageNotFoundComponent},
  {path:'**', redirectTo:'/404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
