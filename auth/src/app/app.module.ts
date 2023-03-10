
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AuthComponent }   from './pages/auth-page/auth-page.component';
import { MainPage }   from './pages/main-page/main-page.component';
import { AppComponent }   from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule }   from './pages/auth-page/auth-page.module';
import { MainModule }   from './pages/main-page/main-page.module';


const appRoutes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            { path: 'auth', component: AuthComponent},
            { path: 'main', component: MainPage },
            { path: '**', redirectTo: '/auth' }
        ],
    },
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, HttpClientModule, FormsModule, MainModule, AuthModule],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
