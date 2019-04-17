import { cadastrar } from './../providers/cadastrar';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
//import {Messages} from '../providers/messages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Toasts } from '../providers/toast';
import {PageprincipalPage} from '../pages/pageprincipal/pageprincipal';
import { HttpProvider } from '../providers/http';
import { HttpModule } from '@angular/http';
import { Logon } from './../providers/logon';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //ListPage,
    PageprincipalPage,
    CadastroPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //ListPage,
    PageprincipalPage,
    CadastroPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
   // Messages,
   HttpProvider,
    Toasts,
    Logon,
    cadastrar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
