import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-first',
    template: 
    `<h1>First Component </h1>
     <st-second [message]="'First'"  (process)="doProcess($event)"></st-second>
     <st-second [message]="today"></st-second>
    `
})
export class FirstComponent implements OnInit {
    today : string = new Date().toString()
    constructor() { }

    ngOnInit(): void { }

    doProcess(msg : String) {
        alert("Event occurred with " + msg)
    }
}
