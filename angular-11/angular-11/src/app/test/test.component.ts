import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p [style.color]="!hasError? 'red': 'green'">I'm from Test Component!</p>
            <div [ngSwitch]="fruit">
              <div *ngSwitchCase="'apple'">You picked apple</div>
              <div *ngSwitchCase="'orange'">You picked orange</div>
              <div *ngSwitchDefault>Pick Again</div>
            </div>
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
  public fruit="apple1";

}
