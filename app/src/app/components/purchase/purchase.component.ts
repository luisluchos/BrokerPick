import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators'

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  purchaseForm:any;

  buildform() {
    this.purchaseForm = this.fb.group({
      price: [''],
      coin: [''],
      number: ['']
    });
    
    //this.purchaseForm.get('coin').setValue(this.coins.id)
  }
  
  coins:any = []
  moneda:any =[]

  constructor(private apiServce: ApiService,private fb: FormBuilder) { 
    this.buildform();
   
  }

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

  save(event:any) {
    event.preventDefault()
    let purchase = this.purchaseForm.value
    console.log("purchase ",purchase);    
  };


}
