import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { AllertMessageComponent } from './allert-message/allert-message.component';
import { SuccessMessageComponent } from './success-message/success-message.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AllertMessageComponent,
    SuccessMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
