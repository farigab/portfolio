import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../../core/services/i18n.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  readonly i18n = inject(I18nService);
  currentYear = signal(new Date().getFullYear());
}
