import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="page contact">
      <h2>Contact</h2>
      <p>Contact form will be implemented here.</p>
    </div>
  `,
  styles: [
    `:host { display: block; padding: 24px; }`
  ]
})
export class ContactComponent { }
