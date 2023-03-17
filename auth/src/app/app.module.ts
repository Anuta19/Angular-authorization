
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
import { DashboardComponent }   from './pages/dashboard/dashboard.component';
import { AccountComponent }   from './pages/account/account.component';
import { DashboardModule }   from './pages/dashboard/dashboard.module';
import { AccountModule }   from './pages/account/account.module';


const appRoutes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            { path: 'auth', component: AuthComponent},
            { path: 'main', component: MainPage },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'account', component: AccountComponent },
            { path: '**', redirectTo: '/auth' }
        ],
    },
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, HttpClientModule, FormsModule, MainModule, AuthModule,DashboardModule,AccountModule],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],

})

export class AppModule { }
