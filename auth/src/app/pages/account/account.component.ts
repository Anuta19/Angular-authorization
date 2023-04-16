
import { Component} from '@angular/core';
import { AccountService } from '../../services/account.service';


export interface Accounts {
    accountNumber: string;
    accountViewName: string;
    clientShortName: string;
    balance: string;
    accountCurrency: string;
    accountCurrencyName: string;
  }


  const ELEMENT_DATA: Accounts[] = [
		{
			"accountNumber": "BY46AKBB30120000001830000000",
			"accountViewName": "Проверка",
			"clientShortName": "Maria",
			"balance": "4974.43",
			"accountCurrency": "EUR",
			"accountCurrencyName": "Euro"
		},
		{
			"accountNumber": "BY43AKBB30132299100196500000",
			"accountViewName": "TestInRU",
			"clientShortName": "МОБИЛЬНЫЙ БАНКИНГ ТЕСТОВЫЙ КЛИЕНТ",
			"balance": "58236.65",
			"accountCurrency": "BYN",
			"accountCurrencyName": "БЕЛОРУССКИЙ РУБЛЬ"
		},
		{
			"accountNumber": "BY53AKBB30120000018380000000",
			"accountViewName": "TestInRU",
			"clientShortName": "МОБИЛЬНЫЙ БАНКИНГ ТЕСТОВЫЙ КЛИЕНТ",
			"balance": "1951.71",
			"accountCurrency": "BYN",
			"accountCurrencyName": "БЕЛОРУССКИЙ РУБЛЬ"
		},
		{
			"accountNumber": "BY54AKBB30120000001760000000",
			"accountViewName": "TestInRU",
			"clientShortName": "МОБИЛЬНЫЙ БАНКИНГ ТЕСТОВЫЙ КЛИЕНТ",
			"balance": "0.00",
			"accountCurrency": "RUB",
			"accountCurrencyName": "РОССИЙСКИЙ РУБЛЬ"
		},
		{
			"accountNumber": "BY05AKBB30124290700200000933",
			"accountViewName": "Текущий (расчетный)",
			"clientShortName": "МОБИЛЬНЫЙ БАНКИНГ ТЕСТОВЫЙ КЛИЕНТ",
			"balance": "0.00",
			"accountCurrency": "BYN",
			"accountCurrencyName": "БЕЛОРУССКИЙ РУБЛЬ"
    }
	];
  
  

@Component({
    selector: 'account-app',
    templateUrl: `./account.html`,    
    styleUrls: ['./accounts.css'],

})

export class AccountComponent {
        
    dataSource: Accounts[];
    constructor(private account: AccountService) 
    {
      this.dataSource = this.account.getAccountsList();
    }

    displayedColumns: string[] = ['accountNumber', 'accountViewName', 'clientShortName', 'balance', 'accountCurrency', 'accountCurrencyName'];

}

