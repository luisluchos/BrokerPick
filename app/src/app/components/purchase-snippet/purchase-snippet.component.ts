import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-purchase-snippet',
  templateUrl: './purchase-snippet.component.html',
  styleUrls: ['./purchase-snippet.component.scss']
})
export class PurchaseSnippetComponent implements OnInit {
  @Input() coin: string="";
  @Input() price: number= 0;
  


  userEmail:any;

  constructor(public auth: AuthService, public apiService: ApiService) {

    this.auth.user$.subscribe((data:any) =>{
      this.userEmail= data.email
      console.log("userData:", this.userEmail);   
    });
    
   };

  ngOnInit(): void {}

  save(event:any) {
    event.preventDefault()  
    let payload = {coin : this.coin, purchase_price: this.price, quantity: 1 , email: this.userEmail, sold: false};
    this.apiService.addWallet(payload).subscribe((data:any)=>{
      console.log("data post", data);
      
    });
    console.log("prueba", payload);
      
  };

};


 /*  buildform() {
    this.purchaseForm = this.fb.group({
      price: [''],
      coin: [''],
      number: ['']
    });
    
    this.purchaseForm.get('coin').setValue(this.coin)
  }; */
