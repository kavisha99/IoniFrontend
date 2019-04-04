import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonTreeViewModule } from 'ionic-tree-view';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { File } from '@ionic-native/File/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import {MatTreeModule} from '@angular/material/tree';


// import { FileOpener } from '@ionic-native/file-opener/ngx';
// import { FileTransfer } from '@ionic-native/file-transfer/ngx';
// import { DocumentViewer } from "@ionic-native/document-viewer/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonTreeViewModule,
    MatTreeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClient,
    File,
    FileOpener,
    FileTransfer,
    DocumentViewer
  
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
