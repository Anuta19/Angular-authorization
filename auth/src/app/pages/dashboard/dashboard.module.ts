
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent }   from './dashboard.component';
import { ChildComponent }   from '../../features/main-page-course/main-page-course.component';


const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, HttpClientModule, FormsModule],
    declarations: [ DashboardComponent, ChildComponent ],
    bootstrap:    [ DashboardComponent, ChildComponent ]

})

export class DashboardModule { }
