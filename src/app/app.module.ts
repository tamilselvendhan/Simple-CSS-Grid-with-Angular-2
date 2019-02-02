import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FilterPipes } from '../../pipe/FilterPipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipes
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FilterPipes],
  bootstrap: [AppComponent]
})
export class AppModule { }
