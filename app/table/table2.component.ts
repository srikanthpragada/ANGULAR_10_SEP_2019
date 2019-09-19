import { Component} from '@angular/core';
import { Model} from "./model"

@Component({
    selector: 'st-table2',
    templateUrl: './table2.component.html'
})
export class Table2Component   {
    numbers : number[] = []
    result : Model[] = []
    constructor() { 
        for(var i = 10; i <= 20; i ++)
          this.numbers.push(i)
    }

    createTable(num : number, len : number) {
         for(var i = 1; i <= len ; i ++)
         {
              var m = { 'num' : num, 'mul' : i, 'res' : i * num}
              this.result.push(m)
         }
         console.log(this.result)
    }
}
