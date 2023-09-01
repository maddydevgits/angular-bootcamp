import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p [style.color]="!hasError? 'red': 'green'">I'm from Test Component!</p>
          
            <h2>{{name}}</h2>
            <button (click)="fireEvent()">Fire Event</button>
            `,
  styles: [`.success{
              color:red
            }
            .mad{
              color:green
            }
          `]
})
export class TestComponent {

  hasError=false;
  @Input('parentData') public name: any;
  @Output() public childEvent=new EventEmitter();

  fireEvent(){
    this.childEvent.emit("I'm from Child Component");
  }

}
