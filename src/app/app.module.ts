import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2OrderPipe } from 'ng2-order-pipe';

import { AppComponent } from './app.component';
import { ReversePipe } from './reverse.pipe';
import { AppRoutingModule, routedComponents } from './app.routing';
import { HighlighterDirective } from './highlighter.directive';
import { ParentComponent } from './inheritance/parent.component';
import { ChildComponent } from './inheritance/child.component';
import { MasterComponent } from './nested/master.component';
import { DetailsComponent } from './nested/details.component';
import { ParenthooksComponent } from './hooks/parenthooks.component';
import { ChildhooksComponent } from './hooks/childhooks.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';

import { EqualTextValidator } from "angular2-text-equality-validator";
import { ModeldrivenComponent } from './modeldriven/modeldriven.component';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    Ng2OrderPipe,
    routedComponents,
    HighlighterDirective,
    ParentComponent,
    ChildComponent,
    MasterComponent,
    DetailsComponent,
    ParenthooksComponent,
    ChildhooksComponent,
    TemplatedrivenComponent,
    EqualTextValidator,
    ModeldrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
