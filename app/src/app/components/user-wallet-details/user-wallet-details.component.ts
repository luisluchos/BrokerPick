import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-wallet-details',
  templateUrl: './user-wallet-details.component.html',
  styleUrls: ['./user-wallet-details.component.scss']
})
export class UserWalletDetailsComponent implements OnInit {

  myWallet:any=[]
  

  
  constructor(private apiService: ApiService, private router: ActivatedRoute) {
   

    this.router.params.subscribe(params=>{
      console.log("parametros", params["id"]);
      this.myWallet=[]  //vaciamos la cartera para mostrar los nuevos
      return this.getWalletDetailUser(params["id"])     
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
        console.log(coinName);
        this.apiService.getPriceCoin(coinName).subscribe((p:any)=>{
          let pricing = p[coinName].usd

          this.myWallet.push( {market_price: pricing , coinName, purchase_price, id  }); 
          console.log("myWalletobsdetails",this.myWallet);   
       });
        
      });
      
     });
     
   });

  }

  }
