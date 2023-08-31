import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p class="success">I'm from Test Component!</p>
            <h2 class="mad">Hello {{name}}`,
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
}
