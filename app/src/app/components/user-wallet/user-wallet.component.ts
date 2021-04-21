import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { filter, map,find } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-wallet',
  templateUrl: './user-wallet.component.html',
  styleUrls: ['./user-wallet.component.scss']
})
export class UserWalletComponent implements OnInit {

  userEmail:any;

  

  constructor(private apiService: ApiService, public auth: AuthService) {
    this.auth.user$.subscribe((data:any) =>{
      this.userEmail= data.email
      console.log("userData:", this.userEmail);   
    });
   }

  ngOnInit(): void {

    this.apiService.getWalletByUser(this.userEmail)
    .pipe(
      map((values:any) => {
        return values.wallets.filter((x:any) => x.coin === "cardano")})
      )
      .subscribe((data:any)=>{
      console.log("userWallet", data);
      
    })

    this.apiService.getWalletByUser(this.userEmail).subscribe((data:any)=>{
      console.log("userWallet", data);
      
    })
  }

}
