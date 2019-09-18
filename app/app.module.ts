import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DirDemoComponent } from './dirdemo/dirdemo.component';


@NgModule({
  declarations: [
    DirDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DirDemoComponent ]
})
export class AppModule { }
