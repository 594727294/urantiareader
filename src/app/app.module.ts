import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UrantiaProvider } from '../providers/urantiaprovider/urantiaprovider';
import { JsonPiper } from '../pipes/json-piper/json-piper';
import { PapersPage } from '../pages/papers/papers';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    JsonPiper,
    PapersPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PapersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UrantiaProvider
  ],
  exports: [JsonPiper],
})
export class AppModule {}
