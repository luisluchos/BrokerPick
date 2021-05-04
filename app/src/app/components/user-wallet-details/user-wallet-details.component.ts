import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-wallet-details',
  templateUrl: './user-wallet-details.component.html',
  styleUrls: ['./user-wallet-details.component.scss']
})
export class UserWalletDetailsComponent implements OnInit {

  myWallet:any=[]

  historicalData:Observable<any> = new Observable()
  margin:Observable<any> = new Observable()
  

  
  constructor(private apiService: ApiService, private router: ActivatedRoute) {
   

    this.router.params.subscribe(params=>{
      console.log("parametros", params["id"]);
      this.myWallet=[]  //vaciamos la cartera para mostrar los nuevos
  
      this.getWalletDetailUser(params["id"])
      this.getWalletHistoricalUser(params["id"])  
      this.getWalletMaarginlUser(params["id"])     
     });  
     
   }

  ngOnInit(): void {


  }

  getWalletDetailUser(idSubscription:string){

    this.apiService.getWalletByUser(idSubscription)
   .subscribe((data:any)=>{
     
     data.wallets.map((values:any)=>{

      let data = values.coins.filter((dataWallet:any)=> !dataWallet.sold)  
      data.forEach((dataUser:any)=>{
        
        let coinName = dataUser.coin
        let purchase_price= dataUser.purchase_price
        let id = dataUser._id
        
        this.apiService.getPriceCoin(coinName).subscribe((p:any)=>{
          let pricing = p[coinName].usd

          this.myWallet.push( {market_price: pricing , coinName, purchase_price, id, }); 
          console.log("myWalletobsdetails",this.myWallet);   
       });
        
      });
      
     });
     
   });

  };


  getWalletHistoricalUser(idSubscription:string){
    this.historicalData = this.apiService.getWalletByUser(idSubscription)
    .pipe(map((data:any)=>{
      console.log("dataHistory", data.wallets[0])
     return data.wallets[0].coins.filter((dataWallet:any)=> dataWallet.sold) 
    }))
  };

  getWalletMaarginlUser(idSubscription:string){
    this.margin = this.apiService.getMarginByUser(idSubscription).
    pipe(map((data:any)=>{
      console.log("margin margin,",data); 
      return data.userMargin[0]  
    }))
  };

  

  }
