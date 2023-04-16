import { DataSource } from '@angular/cdk/collections';
import { Injectable }   from '@angular/core';
import { ValueFromArray } from 'rxjs';
import { AccountComponent, Accounts } from '../pages/account/account.component';

@Injectable({
    providedIn: 'root'
 })

    
export class AccountService {

    accountsData: Accounts[] = [
      {
        "accountNumber": "BY46AKBB30120000001830000000",
        "accountViewName": "Проверка1",
        "clientShortName": "Мария",
        "balance": "494.43",
        "accountCurrency": "EUR",
        "accountCurrencyName": "ЕВРО"
      },
      {
        "accountNumber": "BY43AKBB30132299100196500000",
        "accountViewName": "Проверка2",
        "clientShortName": "Анастасия",
        "balance": "586.65",
        "accountCurrency": "BYN",
        "accountCurrencyName": "БЕЛОРУССКИЙ РУБЛЬ"
      },
      {
        "accountNumber": "BY53AKBB30120000018380000000",
        "accountViewName": "Проверка3",
        "clientShortName": "Евгений",
        "balance": "1951.71",
        "accountCurrency": "RUB",
        "accountCurrencyName": "РОССИЙСКИЙ РУБЛЬ"
      },
      {
        "accountNumber": "BY54AKBB30120000001760000000",
        "accountViewName": "Проверка4",
        "clientShortName": "Даниил",
        "balance": "21875.50",
        "accountCurrency": "RUB",
        "accountCurrencyName": "РОССИЙСКИЙ РУБЛЬ"
      },
      {
        "accountNumber": "BY05AKBB30124290700200000933",
        "accountViewName": "Проверка5",
        "clientShortName": "Дмитрий",
        "balance": "700.00",
        "accountCurrency": "EUR",
        "accountCurrencyName": "ЕВРО"
      }
    ];
//private serviceUrl = './accounts.json';
  
constructor() {
}

    
getAccountsList() {
    return this.accountsData;
}

}
