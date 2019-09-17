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
       // check whether value is already present
       var pos = this.topics.indexOf(value)
       if (pos == -1)  // Not found
           this.topics.push(value)
       else
           alert("Topic already exists!")
   }

    deleteTopic(value : string)
    {
        var pos = this.topics.indexOf(value)
        if (pos >= 0)  //found
            this.topics.splice(pos,1)
        else
            alert("Sorry! Topic not found!")
    }
}

