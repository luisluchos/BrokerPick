import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators'

import { FormBuilder } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

/* interface Coins {
  id: string;
  current_price: number; 
} */

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  coins: Observable<any> = new Observable()
 

  constructor(private apiServce: ApiService,private fb: FormBuilder, public auth: AuthService) { }

  ngOnInit(): void {

    this.coins = timer(1, 60000)
    .pipe(
        mergeMap(() => this.apiServce.getAllCoins())      
    );


    /* interval works, but it would start our polling after 60000 milliseconds. We want to begin polling right away. 
    timer is another function that allows us to start the interval whenever we want, including right now */

    /* switchMap, which turns an input Observable into another Observable. 
    In our case, we will be turning every number emitted by timer into an HTTP request to our backend */
    
  }

}
