import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path:'404', component: PageNotFoundComponent},
  {path:'**', redirectTo:'/404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
