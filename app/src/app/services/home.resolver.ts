import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { timer } from 'rxjs';
import {mergeMap } from 'rxjs/operators';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<boolean> {

  constructor(private apiService :ApiService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return timer(1, 60000)
.pipe(
    mergeMap(() => this.apiService.getAllCoins())
) 
    
  }
}
