import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Platform} from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import {HTTP} from '@ionic-native/http/ngx';
import { HttpProvider } from './providers/http/http';
import { HttpAngularProvider } from './providers/http/http-angular';
import { HttpNativeProvider } from './providers/http/http-native';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    HttpModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(), 
    NgbModule, 
    IonicModule.forRoot(),
    AppRoutingModule, 
    ],
  providers: [
    HTTP,
    StatusBar,
    SplashScreen,
    Platform,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpProvider,
    HttpAngularProvider,
    HttpNativeProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
