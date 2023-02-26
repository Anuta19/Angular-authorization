import { Component} from '@angular/core';
import { CurrencyService } from '../services/currency.service';

  
@Component({
    selector: 'main-app',
    template: `
    <div>
    <p>1 USD <span>=</span> {{bynToUsd}} BYN</p>
    <p>1 EUR <span>=</span> {{bynToEur}} BYN</p>
    <p>1 RUB <span>=</span> {{bynToRub}} BYN</p>
  </div>
  `
})
export class MainPage {

  curencyusd = 'USD';
  currencyeur = 'EUR';
  currencyrub = 'RUB';
  
  currencybyn = 'BYN';

  bynToUsd = 0;
  bynToEur = 0;
  bynToRub = 0;

  ngOnInit() {
    this.getBaseRates();
  }

  getBaseRates() {
    this.currency
      .getBaseCurrencyData(this.currencybyn)
      .subscribe((data: any) => {
        const rates = data.rates;
        this.bynToUsd = 1/rates[this.curencyusd]
        this.bynToEur = 1/rates[this.currencyeur]
        this.bynToRub = 100/rates[this.currencyrub]

      });
  }

  constructor(private currency:CurrencyService){}

 }