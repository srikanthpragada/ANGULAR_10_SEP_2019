import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirstComponent } from './icc/first.component';
import { SecondComponent } from './icc/second.component';



@NgModule({
  declarations: [
     FirstComponent, SecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FirstComponent]
})
export class AppModule { }
