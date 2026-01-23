import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="page about">
      <h2>About</h2>
      <p>This is a placeholder for the About page.</p>
    </div>
  `,
  styles: [
    `:host { display: block; padding: 24px; }`
  ]
})
export class AboutComponent { }
