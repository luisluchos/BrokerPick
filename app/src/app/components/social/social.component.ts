import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  @Input() userToFollow:any=[]

  follower:boolean = false

  constructor(public auth: AuthService, public apiService: ApiService, private router: ActivatedRoute) {
    this.router.params.subscribe(params=>{
      console.log("parametrosSocials", params["id"]);
     }); 

     this.isFollower()

   }

  ngOnInit(): void { }

  /**
  * @param data vemos si el usuario está subscrito
   * @param data.sub.slice(6) extraemos su id y pedimos que nos enseñe sus folowers
   * @param values iteramos en el array de follows ,map()
   * @param dataFollowers obtemos los seguidores y lo filtramos para ver si ya existe
   * @param res.length Longitud del array, si es >0 significa que ya existe
   */

   isFollower(){
    this.auth.user$.subscribe((data:any) =>{
      console.log(data);
       
      
    this.apiService.getFollowsByUser(data.sub.slice(6))
    .subscribe((dataFollows:any)=> {
      dataFollows.follows.map((values:any)=>{
        let res =values.follows.filter((dataFollowers:any)=> dataFollowers.id_follow === this.userToFollow._id.idSub
        )
        if (res.length > 0){
          this.follower = true
          return console.log("ya es follower")
          
        }
  }

      )}
    )}
    )}


  /**
   * @param this.follower si es true, ya existe
   * si existe ("ya es follower"), y si no enviamos payload
   * @param payload información que vamos a subir a la base de datos
   * 
   */

   save(event:any) {
    event.preventDefault() 

    this.auth.user$.subscribe((data:any) =>{
      console.log(data);
       
        if (this.follower === true ){
          return console.log("ya es follower")
        } else {
          
            let payload = {
              id_follow: this.userToFollow._id.idSub,
              name_follow: this.userToFollow._id.name,
              name: data.nickname, 
              nickname: data.nickname, 
              email: data.email, 
              idSub: data.sub.slice(6),
              sold: false};
        
            this.apiService.addFollow(payload).subscribe()
            this.follower = true;

        }      
     });       
  }; 

  
}
  
    
