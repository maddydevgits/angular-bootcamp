import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p>I'm from Test Component!</p>
            <h2>Hello {{name}}`,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public name="Madhu";
}
