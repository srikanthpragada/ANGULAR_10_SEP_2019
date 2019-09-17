import { Component } from '@angular/core';

@Component({
    selector: 'st-binddemo',
    templateUrl: './binddemo.component.html',
    styleUrls: ['./binddemo.component.css']
})
export class BindDemoComponent {
    message : string;
    name : string = "Angular"
    isBig : boolean = true; 

    constructor() { 
        this.message = new Date().toString();
    }

    toggleBig() {
        this.isBig = !this.isBig;
    }

    showMouse(e)  // e is of type MouseEvent
    {
        // console.log(e)
        console.log(`X = ${e.x}, Y = ${e.y}`)
    }
    
}
