import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AuthComponent }   from './pages/auth-page.component';
import { MainPage }   from './pages/main-page.component';
import { AppComponent }   from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes =[
    { path: 'auth', component: AuthComponent},
    { path: 'main', component: MainPage },
    { path: '', component: MainPage },
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, HttpClientModule, FormsModule],
    declarations: [ AppComponent, AuthComponent,MainPage],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }