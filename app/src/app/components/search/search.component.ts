import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})



export class SearchComponent implements OnInit {

  

  limit:string = "30"

  users:Observable<any> = new Observable()

  constructor(private apiService: ApiService, private router: Router){
    this.buscar(undefined)
  }

  ngOnInit(): void {

  }

  buscar(value:any){
    console.log(value);
    
    this.users = this.apiService.getMarginByUserName(value, this.limit)
    .pipe(map((data:any)=>{
      console.log("artistadata: ",data);
      return data.userMargin
      
    }))
    console.log("buscar user: ",this.users);
    

  }

  verUserDetail(item:any){
    let idUser = item._id.idSub
    console.log("ver datos de usuario: ", item);
    this.router.navigate(['/userList', idUser])
    
    
  }
}
