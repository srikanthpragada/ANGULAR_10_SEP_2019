import {Component} from '@angular/core';

@Component({
    selector: 'st-hello',
    templateUrl: './hello.component.html'
})
export class HelloComponent {
   message = "Welcome!"
   version : number = 8;
   topics : string[] = ['Data Binding','Forms','Http','Routing']

   addTopic(value : string) {
       this.topics.push(value)
   }

//    deleteTopic()
//    {

//    }
}

