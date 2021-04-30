import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable,interval, timer, Subscription, Subject,  } from 'rxjs';
import { concatMap, map, tap, switchMap, mergeMap } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  coins:any = []
  userWallets:Observable<any> = new Observable()

  constructor(private apiServce: ApiService) { 
    
   
  }

  ngOnInit(): void {

    this.coins = timer(1, 60000)
    .pipe(
        mergeMap(() => this.apiServce.getAllCoins())
    );

    /* timer is another function that allows us to start the interval whenever we want, including right now */

    /* switchMap, which turns an input Observable into another Observable. 
    In our case, we will be turning every number emitted by timer into an HTTP request to our backend */
    
    this.userWallets = this.apiServce.getAllUserWallets()
    .pipe(map((data:any)=>{
      console.log("wallets: ",data.wallets);
       return data.wallets
   //.pipe porque queremos entrar a la información de wallets (data.wallets)
    
    }));

};
}
