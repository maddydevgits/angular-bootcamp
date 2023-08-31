import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p [style.color]="!hasError? 'red': 'green'">I'm from Test Component!</p>
            <div *ngFor="let fruit of fruits">
              <h2>{{fruit}}</h2>
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
  public fruits=["apple","orange","banana"]

}
