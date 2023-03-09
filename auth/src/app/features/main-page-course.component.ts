import { Input} from '@angular/core';
import { Component} from '@angular/core';
  
@Component({
    selector: 'main-child',
    template: ` <div>
      <p>1 USD <span>=</span> {{bynToUsd}} BYN</p>
      <p>1 EUR <span>=</span> {{bynToEur}} BYN</p>
      <p>100 RUB <span>=</span> {{bynToRub}} BYN</p>
  </div>`
})
export class ChildComponent { 
      @Input() bynToRub: number;   
      @Input() bynToUsd: number;
      @Input() bynToEur: number;
    }