import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent }   from './home.component';
import { MainPage }   from './main-page.component';
import { AppComponent }   from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes =[
    { path: 'home', component: HomeComponent},
    { path: 'main', component: MainPage },
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule],
    declarations: [ AppComponent, HomeComponent,MainPage],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }