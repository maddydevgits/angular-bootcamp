import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p [class]="classSuccess">I'm from Test Component!</p>
            <h2 [class]="classMad">Hello {{name}}`,
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
  public classSuccess="success";
  public classMad="mad";

}
