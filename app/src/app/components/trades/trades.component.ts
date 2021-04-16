import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';

type Wallet= {
  email: string,
  coins: Array<{}>,
 
};

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.scss']
})
export class TradesComponent implements OnInit {

  //como evitar poner any, ¿debería ir como observable?
userWallet:any =[]
userData:any;

  constructor(public auth: AuthService, public apiService : ApiService) { 
    this.auth.user$.subscribe((data:any) =>{
      this.userData= data.email
      console.log("userData:", this.userData);
      
    })
  }

  ngOnInit(): void {

  this.apiService.getWalletByUser(this.userData).subscribe((data:any)=>{
    this.userWallet=data.wallets[0]
  
   console.log("coins", data.wallets[0].coins); 
   console.log(data.wallets[0]);
      
  });

  /**
   * Queremos sacar la suma de la cantidad de coins que tiene un user
   */
  this.apiService.getWalletByUser(this.userData)
  .pipe(map(((data:any) => data.wallets[0].coins.reduce((a:any, b:any) => a + b.cantidad, 0))))
  .subscribe((data:any)=>console.log("total Coins",data)
  );
  

}
}
