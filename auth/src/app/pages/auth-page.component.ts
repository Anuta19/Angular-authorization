
import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

  
@Component({
    selector: 'auth-app',
    templateUrl: './html/auth-page.html',    
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
       this.auth.login(this.myForm.value.userEm, this.myForm.value.userPas)
       {
        if(true)
        {
            console.log(11111);
            this.router.navigateByUrl('/main');
        }
        else
        {
            alert("Что-то не так");
        }
    }
       
    }
}
