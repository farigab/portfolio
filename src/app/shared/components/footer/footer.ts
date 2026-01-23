import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: '',
  styles: [
    `:host { display:block; padding: 24px; text-align:center; color:var(--text-secondary); }`
  ]
})
export class FooterComponent {
  currentYear = signal(new Date().getFullYear());
}
