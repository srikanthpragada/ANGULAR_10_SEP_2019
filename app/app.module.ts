import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductsListComponent } from './icc/products-list.component';
import { ProductDetailsComponent } from './icc/product-details.component';
import { UseCounterComponent } from './services/use-counter.component';
import { UseCounter2Component } from './services/use-counter2.component';
import { CounterService } from './services/CounterService';



@NgModule({
  declarations: [
      UseCounterComponent, UseCounter2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [CounterService],
  bootstrap: [UseCounterComponent, UseCounter2Component]
})
export class AppModule { }
