import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable, timer  } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  coins:any = []
  userWallets:Observable<any> = new Observable()

  constructor(private apiService: ApiService, private route: ActivatedRoute ) { 
  /* NO DEJA HACER RESOLVER PARA QUE REPIITA LA PETICIÓN A LA API CADA X SEGUNDOS

     this.route.data.subscribe(data => { 
      console.log("data",data.coins);
      this.coins = data.coins;
    }); */
  };

  ngOnInit(): void {
    this.getRecurrentData()
    this.getUsersWallets()
};

/**
 * Capturamos la data de la Api externa
 */

getRecurrentData(){
  this.coins = timer(1, 60000)   /* timer is another function that allows us to start the interval whenever we want, including right now */
.pipe(
    mergeMap(() => this.apiService.getAllCoins())
)}; 


/**
 * Hacemos la petición para obtener los top Users
 */

getUsersWallets(){
  this.userWallets = this.apiService.getAllUserWallets()
  .pipe(map((data:any)=>{
    console.log("wallets: ",data.wallets);
     return data.wallets
 //.pipe porque queremos entrar a la información de wallets (data.wallets)
  }));
};


}

