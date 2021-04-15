import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { TradesComponent } from './components/trades/trades.component';
import { HomeComponent } from './components/views/home/home.component';
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component';
import { TradesResolver } from './services/trades.resolver';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'trades', pathMatch: 'full', component: TradesComponent,canActivate: [AuthGuard],resolve: {trades: TradesResolver}},
  {path:'404', component: PageNotFoundComponent},
  {path:'**', redirectTo:'/404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
