import { Component} from '@angular/core';

@Component({
    selector: 'st-dirdemo',
    templateUrl: './dirdemo.component.html'
})
export class DirDemoComponent   {
    names : string[] = ['Java','Python','C#','TypeScript']
    constructor() { }

    
}
