import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WebBooksComponent } from './http/webbooks.component';
import { AddBookComponent } from './http/add-book.component';
import { WebBooks2Component } from './http/webbooks2.component.';




@NgModule({
  declarations: [
      WebBooks2Component
  ],
  imports: [
    BrowserModule, HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [WebBooks2Component]
})
export class AppModule { }
