
import { Component} from '@angular/core';
import { CurrencyService } from '../services/currency.service';

  
@Component({
    selector: 'main-app',
    template: ` 
    <div>
    <p>1 USD <span>=</span> {{bynToUsd}} BYN</p>
    <p>1 EUR <span>=</span> {{bynToEur}} BYN</p>
    <p>100 RUB <span>=</span> {{bynToRub}} BYN</p>
  </div>
  `
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
