import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-margin',
  templateUrl: './margin.component.html',
  styleUrls: ['./margin.component.scss']
})
    

export class MarginComponent implements OnInit {

  idSubscription:string=""
  margin:Observable<number> = new Observable()

  constructor(private apiService : ApiService, public auth: AuthService) {

    this.auth.user$.subscribe((data:any) =>{
      this.idSubscription = data.sub.slice(6)
      console.log("userData:", this.idSubscription);   
    });
   }

  ngOnInit(): void {
    this.margin = this.apiService.getMarginByUser(this.idSubscription).
    pipe(map((data:any)=>{
      console.log("margin,",data.userMargin[0].margin); 
      return data.userMargin[0].margin     
    }))
   
  }

}
