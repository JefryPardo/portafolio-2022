import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './Components/header/header.component';
import {MenubarModule} from 'primeng/menubar';
import { InicioComponent } from './Components/inicio/inicio.component';
import { AllComponent } from './Components/all/all.component';
import {ButtonModule} from 'primeng/button';
import { AboutComponent } from './Components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    AllComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,   
    ButtonModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
