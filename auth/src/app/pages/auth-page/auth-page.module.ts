
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AuthComponent }   from './auth-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';

const appRoutes: Routes = [
    {
        path: '',
        component: AuthComponent
    },
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, HttpClientModule, FormsModule,MatFormFieldModule,MatInputModule,MatButtonToggleModule,MatButtonModule],
    declarations: [ AuthComponent ],
    bootstrap:    [ AuthComponent ]

})

export class AuthModule { }
