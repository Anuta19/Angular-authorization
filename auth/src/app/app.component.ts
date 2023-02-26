
/* Reactive forms */
import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from './services/auth.service';
   
@Component({
    selector: 'my-app',
    
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    template: `
    <h3>Авторизация</h3>
    <router-outlet></router-outlet>	
                `,
                
})


export class AppComponent 
{ 

    
    /*
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
        /*
        if ((this.myForm.value.userEmail==this.auth.userList.email) && (this.myForm.value.userPassword==this.auth.userList.password))
        {
            //console.log(1111);
            this.router.navigateByUrl('/main');
        }    
        else
        {
            alert("Что-то не так");
        }  
        */
    
    

}



