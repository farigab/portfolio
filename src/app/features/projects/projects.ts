import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <div class="page projects">
      <h2>Projects</h2>
      <p>Projects will be listed here.</p>
    </div>
  `,
  styles: [
    `:host { display: block; padding: 24px; }`
  ]
})
export class ProjectsComponent { }
