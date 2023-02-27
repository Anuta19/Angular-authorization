import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
providedIn: 'root'
})

export class CurrencyService {
    constructor(private http: HttpClient) {}
  
    getBaseCurrencyDataUSD(count: string) 
    {
      let url = 'https://www.nbrb.by/api/exrates/rates/431';
      return this.http.get(url);
    }

    getBaseCurrencyDataEUR(count: string) 
    {
      let url = 'https://www.nbrb.by/api/exrates/rates/451';
      return this.http.get(url);
    }

    getBaseCurrencyDataRUB(count: string) 
    {
      let url = 'https://www.nbrb.by/api/exrates/rates/456';
      return this.http.get(url);
    }

  }