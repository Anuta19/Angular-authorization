import { Input} from '@angular/core';
import { Component} from '@angular/core';
  
@Component({
    selector: 'main-child',
    template: ` <div>
      <p>1 USD <span>=</span> <main-child [bynToUsd]="bynToUsd"></main-child> BYN</p>
      <p>1 EUR <span>=</span> <main-child [bynToEur]="bynToEur"></main-child> BYN</p>
      <p>100 RUB <span>=</span> <main-child [bynToRub]="bynToRub"></main-child> BYN</p>
  </div>`
})
export class ChildComponent { 
      @Input() bynToRub: number;   
      @Input() bynToUsd: number;
      @Input() bynToEur: number;
    }