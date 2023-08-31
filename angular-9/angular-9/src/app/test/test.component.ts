import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p [style.color]="!hasError? 'red': 'green'">I'm from Test Component!</p>
            <h2 [style.color]="hasError ? 'red': 'green'">Hello {{name}} </h2>
            <input #myInput type="text" value="enter name" /> &nbsp;
            <button (click)="onSubmit(myInput.value)">Submit</button>
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
  onSubmit(value: any) {
    this.name=value;
    console.log(value);
  }

}
