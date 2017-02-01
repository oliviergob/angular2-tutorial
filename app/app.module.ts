import { NgModule }       from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import {APP_BASE_HREF}    from '@angular/common';
import { Router }         from '@angular/router';

import { AppComponent }       from './app.component';
import { HeaderComponent }    from './shared/layout/header.component';
import { BasicComponent }     from './basic.component';
import { LoginComponent }     from './login.component';
import { AppRoutingModule }   from './app-routing.module';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, HeaderComponent, BasicComponent, LoginComponent  ],
  bootstrap: [ AppComponent ],
  //providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule {}
