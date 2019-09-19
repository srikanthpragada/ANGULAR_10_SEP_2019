import { Component} from '@angular/core';

@Component({
    selector: 'st-table',
    templateUrl: './table.component.html'
})
export class TableComponent   {
    numbers : number[] = []
    result : number[] = []
    constructor() { 
        for(var i = 10; i <= 20; i ++)
          this.numbers.push(i)
    }

    createTable(len : string) {
        this.result = Array(parseInt(len));
        console.log(this.result)
    }
}
