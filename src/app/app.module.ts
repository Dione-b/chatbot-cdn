import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MensageBoxComponent } from './mensage-box/mensage-box.component';
import { TextMensageComponent } from './text-mensage/text-mensage.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    MensageBoxComponent,
    TextMensageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
