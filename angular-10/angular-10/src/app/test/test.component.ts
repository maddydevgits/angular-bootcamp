import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p [style.color]="!hasError? 'red': 'green'">I'm from Test Component!</p>
            <h2 *ngIf="display; else elseBlock" [style.color]="hasError? 'red': 'green'">
              Hello I'm Madhu
            </h2>

            <ng-template #elseBlock>
              <h2 [style.color]="hasError? 'red': 'green'">
                Hidden
              </h2>
            </ng-template>
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

  display=true;

}
