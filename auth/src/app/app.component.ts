/* Reactive forms */
import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {DataService} from './data.service';
   
@Component({
    selector: 'my-app',
    
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    template: `
                <form [formGroup]="myForm" novalidate (ngSubmit)="submit()">
                
                    <div class="form-group">
                        <label>Email</label>
                        <input class="form-control" name="email" formControlName="userEmail" />
                          
                        <div class="alert alert-danger"
                            *ngIf="myForm.controls['userEmail'].invalid && myForm.controls['userEmail'].touched">
                            Некорректный email
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Пароль</label>
                        <input class="form-control" name="password" formControlName="userPassword" />
                        <div class="alert alert-danger"
                            *ngIf="myForm.controls['userPassword'].invalid && myForm.controls['userPassword'].touched">
                            Некорректный пароль
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-default">
                            Отправить
                        </button>
                    </div>
                  
                </form>
                <router-outlet></router-outlet>	
                `,
    providers: [DataService]
                
})


export class AppComponent 
{ 
    myForm : FormGroup;
    constructor(public router: Router, private dataService: DataService)
    {
        
        this.myForm = new FormGroup({
             
            "userEmail": new FormControl("", [
                                Validators.required, 
                                Validators.email,
                            ]),
            "userPassword": new FormControl("", [
                Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                Validators.minLength(8),
            ])
            
        });
        

    }
    
    submit()
    {
        if ((this.myForm.value.userEmail==this.dataService.email) && (this.myForm.value.userPassword==this.dataService.password))
        {
            //console.log(1111);
            this.router.navigateByUrl('/main');
        }    
        else
        {
            alert("Что-то не так");
        }  
    }

}


