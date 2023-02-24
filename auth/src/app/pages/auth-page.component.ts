import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

  
@Component({
    selector: 'auth-app',
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
                ngIf="myForm.controls['userPassword'].invalid && myForm.controls['userPassword'].touched">
                Некорректный пароль
            </div>
        </div>

        <div class="form-group">
            <button class="btn btn-default">
                Отправить
            </button>
        </div>
  
    </form>
            `,    
})


export class AuthComponent {

    myForm : FormGroup;
    constructor(public router: Router, private auth: AuthService)
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
        this.auth.userList.forEach((elem1, index) => {elem1;
            if(this.myForm.value.userEmail == elem1.email && this.myForm.value.userPassword == elem1.password)
            {
                this.router.navigateByUrl('/main');
            }
            else
            {
                alert("Что-то не так");
            }
        }); 
    }
}