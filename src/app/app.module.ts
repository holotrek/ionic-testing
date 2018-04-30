import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { OrganisationsPageModule } from '../pages/organisations/organisations.module';
import { ReposPageModule } from '../pages/repos/repos.module';
import { UserDetailsPageModule } from '../pages/user-details/user-details.module';
import { UsersPageModule } from '../pages/users/users.module';
import { GithubUsersProvider } from '../providers/github-users/github-users';
import { MyApp } from './app.component';

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp),
        UsersPageModule,
        UserDetailsPageModule,
        ReposPageModule,
        OrganisationsPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        GithubUsersProvider
    ]
})
export class AppModule { }
