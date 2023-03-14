
import { Component} from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
  
@Component({
    selector: 'main-app',
    templateUrl: `./main-page.html`,    
})

export class MainPage {

  curencyusd = 'USD';
  currencyeur = 'EUR';
  currencyrub = 'RUB';
  
  currencybyn = 'BYN';

  bynToUsd = 0;
  bynToEur = 0;
  bynToRub = 0;

  ngOnInit() 
  {
    this.getBaseRates();
  }

  getBaseRates() {
    this.currency
      .getBaseCurrencyDataUSD(this.currencybyn)
      .subscribe((data: any) => {
        const rates = data.rates;
        this.bynToUsd = data.Cur_OfficialRate;
      });

      this.currency
      .getBaseCurrencyDataEUR(this.currencybyn)
      .subscribe((data: any) => {
        const rates = data.rates;
        this.bynToEur = data.Cur_OfficialRate;
      });

      this.currency
      .getBaseCurrencyDataRUB(this.currencybyn)
      .subscribe((data: any) => {
        const rates = data.rates;
        this.bynToRub = data.Cur_OfficialRate;
      });
  }
  

  constructor(private currency:CurrencyService){}

 }
