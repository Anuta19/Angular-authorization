
import { Component} from '@angular/core';
import { CurrencyService } from '../services/currency.service';

  
@Component({
    selector: 'main-app',
    template: `<div>
      <p>1 USD <span>=</span> <main-child [bynToUsd]="bynToUsd"></main-child> BYN</p>
      <p>1 EUR <span>=</span> <main-child [bynToEur]="bynToEur"></main-child> BYN</p>
      <p>100 RUB <span>=</span> <main-child [bynToRub]="bynToRub"></main-child> BYN</p>
  </div>`,    

  //перенести в фьючерс templates
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
