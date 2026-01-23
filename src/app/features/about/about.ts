import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardModule, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {
  githubUrl = signal('https://github.com/farigab');
  linkedinUrl = signal('https://www.linkedin.com/in/gabriel-b-f/?locale=en_US');
}
