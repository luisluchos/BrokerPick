import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-wallet-historical',
  templateUrl: './wallet-historical.component.html',
  styleUrls: ['./wallet-historical.component.scss']
})
export class WalletHistoricalComponent implements OnInit {

  idSubscription:string=""
  historicalData:Observable<any> = new Observable()

  constructor(private apiService: ApiService, private auth :AuthService) {
    
    this.auth.user$.subscribe((data:any) =>{
      this.idSubscription = data.sub.slice(6)
      console.log("hisoricaluserDataID:", this.idSubscription);   
    });


   }

  ngOnInit(): void {

    this.historicalData = this.apiService.getWalletByUser(this.idSubscription)
    .pipe(map((data:any)=>{
      console.log("dataHistory", data.wallets[0])
     return data.wallets[0].coins.filter((dataWallet:any)=> dataWallet.sold) 
    }))
  }

}
