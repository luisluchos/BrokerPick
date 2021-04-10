import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  coins:any = []

  constructor(private apiServce: ApiService) { 

   
  }

  ngOnInit(): void {

    this.coins = this.apiServce.getAllCoins()
  }

}
