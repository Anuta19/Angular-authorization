import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
providedIn: 'root'
})

export class CurrencyService {
    constructor(private http: HttpClient) {}
  
    getBaseCurrencyData(count: string) 
    {
      let url = 'https://www.nbrb.by/api/exrates/rates?periodicity=0' + count;
      
      return this.http.get(url);
    }

  }