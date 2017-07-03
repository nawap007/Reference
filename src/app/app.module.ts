import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2OrderPipe } from 'ng2-order-pipe';

import { AppComponent } from './app.component';
import { ReversePipe } from './reverse.pipe';
import { AppRoutingModule, routedComponents } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    Ng2OrderPipe,
    routedComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
