
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { MainPage }   from './main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent }   from '../../features/main-page-course/main-page-course.component';
import {MatToolbarModule} from '@angular/material/toolbar';

const appRoutes: Routes = [
    {
        path: '',
        component: MainPage
    },
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule,MatToolbarModule],
    declarations: [ MainPage, ChildComponent],
    bootstrap:    [ MainPage, ChildComponent]
})

export class MainModule { }
