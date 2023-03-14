
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { MainPage }   from '../../pages/main-page/main-page.component';
import { AuthComponent }   from './auth-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
    {
        path: '',
        component: AuthComponent
    },
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, HttpClientModule, FormsModule],
    declarations: [ AuthComponent ],
    bootstrap:    [ AuthComponent ]
})

export class AuthModule { }
