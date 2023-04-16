import { Injectable } from '@angular/core';


@Injectable({
   providedIn: 'root'
})


  
export class AuthService {

    constructor() {
    }

    
    userList = 
    [{
        email: "111@mtp.by",
        password: "qawsed191"
    },
    {
        email: "admin@mail.ru",
        password: "admin1111"
    },
    {
        email: "log@yandex.ru", 
        password: "password"
    }]



    login(userEm: string, userPas: string): boolean
    {
        const result = this.userList.some((elem1) => {elem1;
            if(elem1.email == userEm  && elem1.password == userPas)
            {
              return true;
            }
            else
            {
              return false;
            }
          }); 
        return result;
    }
}
