import { Input} from '@angular/core';
import { Component} from '@angular/core';
  
@Component({
    selector: 'main-child',
    templateUrl: `./main-page-course.html`,    
})
export class ChildComponent { 
      @Input() bynToRub: number;   
      @Input() bynToUsd: number;
      @Input() bynToEur: number;
    }