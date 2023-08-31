import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p [style.color]="!hasError? 'red': 'green'">I'm from Test Component!</p>
            <h2 [style.color]="hasError ? 'red': 'green'">Hello {{name}}`,
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

}
