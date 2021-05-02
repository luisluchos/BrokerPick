import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-card-snippet',
  templateUrl: './user-card-snippet.component.html',
  styleUrls: ['./user-card-snippet.component.scss']
})
export class UserCardSnippetComponent implements OnInit {

  idSubscription:any
  margin:Observable<any> = new Observable()

  constructor(private apiService : ApiService, private router: Router) {}

  ngOnInit(): void {
    this.margin = this.apiService.getAllMargins().
    pipe(map((data:any)=>{
      console.log("margin,",data.allMargin); 
      return data.allMargin    
    }))
   
  };

  verUserDetail(item:any){
    let idUser = item._id.idSub
    console.log("ver datos de usuario: ", item);
    this.router.navigate(['/userList', idUser])
    
    
  }

}
