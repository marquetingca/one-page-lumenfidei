import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModuleModule } from './share-module/share-module.module';
import { ConstructionModule } from './construction/construction.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModuleModule,
    ConstructionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
