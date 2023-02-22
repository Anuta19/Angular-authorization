import { Injectable } from '@angular/core';


@Injectable({
   providedIn: 'root'
})

export class AuthService {

    "userList":
    [{
        "email": "111@mtp.by",
        "password": "qawsed191"
    },
    {
        "email": "admin@mail.ru",
        "password": "admin1111"
    },
    {
        "email": "log@yandex.ru", 
        "password": "password"
    }]



    constructor() {
    }


    login(userEmail: string, userPassword: string)
    {
        this.userList.forEach((elem1, index) => {elem1;
              if(userEmail == elem1.email && userPassword == elem1.password)
              {
                return true;
              }
              else
              {
                return false;
              }
          });
    }
}
