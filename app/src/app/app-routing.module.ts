import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { TradesComponent } from './components/trades/trades.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserWalletDetailsComponent } from './components/user-wallet-details/user-wallet-details.component';
import { UserPrivateWalletComponent } from './components/user-private-wallet/user-private-wallet.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { TradesResolver } from './services/trades.resolver';
import { HomeResolver } from './services/home.resolver';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', pathMatch: 'full', component: HomeComponent/* ,resolve: { coins: HomeResolver} */},
  {path: 'userList', pathMatch: 'full', component: UserListComponent},
  {path: 'userList/:id',pathMatch: 'full',component: UserWalletDetailsComponent},
  {path: 'purchase', pathMatch: 'full', component: PurchaseComponent,canActivate: [AuthGuard],resolve: {trades: TradesResolver}},
  {path: 'userwallet', pathMatch: 'full', component: UserPrivateWalletComponent,canActivate: [AuthGuard]},
  {path:'404', component: PageNotFoundComponent},
  {path:'**', redirectTo:'/404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
