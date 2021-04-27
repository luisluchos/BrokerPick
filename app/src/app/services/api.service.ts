import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URI = 'http://localhost:3000/api';
  private url= "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&"
  private url2= "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin"
  private currency ="&vs_currencies=usd"

  constructor(private http : HttpClient) { }

  /* Para hacer poder mostrar los datos en el HTML del componente, en lugar de hacer el subscribe en el servicio, 
  tenemos que devolver un Observable de la llamada http */
  /* Los métodos observables son funciones declarativas, se definen para publicar valores pero no se ejecutan 
  hasta que un consumidor se suscribe a ellas, desde ese momento recibe notificaciones hasta que finalice 
  la función observable o finalice la suscripción de forma programada. */

  getAllCoins():Observable<object>{
    return this.http.get(`${this.url}`)
  };

  getPriceCoin(coin:any):Observable<object>{
    return this.http.get("https://api.coingecko.com/api/v3/simple/price?ids="+coin+"&vs_currencies=usd")
  }
;
  getAllWallets() {
    return this.http.get(`${this.BASE_URI}/wallets`);
  };

  getWalletByUser(user:string): Observable<any> {
    let params = new HttpParams()
      .set('user', user)
      return this.http.get(`${this.BASE_URI}/wallets`,{params:params});
  };

  addWallet(payload:any): Observable<any> {
    
    return this.http.post(`${this.BASE_URI}/wallets`, payload);
  };

  sellCoin(payload:any): Observable<any> {

    return this.http.post(`${this.BASE_URI}/wallets/sellCoin`, payload);
  }





}

