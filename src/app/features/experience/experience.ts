import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <div class="page experience">
      <h2>Experience</h2>
      <p>Experience timeline will appear here.</p>
    </div>
  `,
  styles: [
    `:host { display: block; padding: 24px; }`
  ]
})
export class ExperienceComponent { }
