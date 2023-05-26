import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CustomStrategy } from './strategies/custom.strategy';
import { StandaloneComponent } from './components/standalone/standalone.component';
import { Standalone2Component } from "./components/standalone2/standalone2.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [CustomStrategy],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StandaloneComponent,
        Standalone2Component
    ]
})
export class AppModule { }
