import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  login:boolean= false
  perfilPicture:Observable<any> = new Observable()

  constructor(public auth: AuthService) {
    auth.isAuthenticated$.subscribe(data => this.login = data) //hide or show when we are login
    console.log("login",this.login);

    this.auth.user$.subscribe((data:any)=>{
     this.perfilPicture=data.picture;
     
    })
    
    

  
   }

  ngOnInit(): void {
  }

}
