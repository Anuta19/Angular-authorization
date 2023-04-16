
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent }   from './account.component';
import { MatTableModule } from '@angular/material/table'  


const appRoutes: Routes = [
    {
        path: '',
        component: AccountComponent
    },
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, HttpClientModule, FormsModule,MatTableModule],
    declarations: [ AccountComponent ],
    bootstrap:    [ AccountComponent ]

})

export class AccountModule { }
