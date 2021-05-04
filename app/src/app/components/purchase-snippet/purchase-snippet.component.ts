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

  
  constructor(public auth: AuthService, public apiService: ApiService) {};

  ngOnInit(): void {}


/**
 * Guardamos la seleccin en la base de datos
 * obtenemos primero los datos del usuario
 * obtemos el resto de datos que vienen del padre.
 * mandamos el payload al apiservice
 *
 */
  save(event:any) {
    event.preventDefault()  

    this.auth.user$.subscribe((data:any) =>{
      console.log(data);
      
    let payload = {
      coin : this.coin, 
      purchase_price: this.price, 
      quantity: 1 ,
      picture: data.picture, 
      name: data.nickname, 
      nickname: data.nickname, 
      email: data.email, 
      idSub: data.sub.slice(6),
      updated_at: data.updated_at,
      sold: false};

    this.apiService.addWallet(payload).subscribe();
     });       
  };


  

};

