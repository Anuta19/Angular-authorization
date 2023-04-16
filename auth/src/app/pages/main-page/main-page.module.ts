
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { MainPage }   from './main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent }   from '../../features/main-page-course/main-page-course.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardComponent }   from '../dashboard/dashboard.component';
import { AccountComponent }   from '../account/account.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MainPage,
        children: [
            { path: 'main/dashboard', component: DashboardComponent },
            { path: 'main/account', component: AccountComponent },
        ]
    },
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule,MatToolbarModule],
    declarations: [ MainPage],
    bootstrap:    [ MainPage]
})

export class MainModule { }
