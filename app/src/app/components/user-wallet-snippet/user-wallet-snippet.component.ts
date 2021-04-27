import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-wallet-snippet',
  templateUrl: './user-wallet-snippet.component.html',
  styleUrls: ['./user-wallet-snippet.component.scss']
})
export class UserWalletSnippetComponent implements OnInit {

  @Input() coin: string ="";
  @Input() purchase_price: number = 0;
  @Input() market_price: number = 0;
  @Input() id: string ="";

  


  constructor(public apiService: ApiService, private router: Router) { }

  ngOnInit(): void {

  }

  sell(event:any) {
    
    event.preventDefault()  
    let payload = { id: this.id, market_price: this.market_price, sold: true}
    console.log("sell",payload);

    this.apiService.sellCoin(payload).subscribe((data:any)=>{
      console.log("data Sell", data)
      /**
       * QUIERO QUE HAGA UN REFRESH DE LA PÁGINA, NO FUNCIONA HACER DIRECTAMENTE this.router.navigate(["/userwallet"]); 
       */
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });
    
    
    });
        
  };

 //ERROR AL PONER ONDESTROY
}
