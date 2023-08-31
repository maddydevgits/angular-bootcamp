import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p [style.color]="!hasError? 'red': 'green'">I'm from Test Component!</p>
            <h2 [style.color]="hasError ? 'red': 'green'">Hello {{name}} </h2>
            <button (click)="onClick()">Set</button> &nbsp;
            <button (click)="onReset()">Reset</button>
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
  public name="Madhu";
  public hasError=false;

  onClick() {
    this.name="srav";
    console.log('Button Clicked');
  }
  onReset() {
    this.name="Madhu";
    console.log('Reset Clicked');
  }

}
