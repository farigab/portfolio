import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardModule, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {
  readonly i18n = inject(I18nService);
  githubUrl = signal('https://github.com/farigab');
  linkedinUrl = signal('https://www.linkedin.com/in/gabriel-b-f/?locale=en-US');
}
