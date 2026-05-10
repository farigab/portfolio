import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CardModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  readonly i18n = inject(I18nService);
  readonly experiences = computed(() => this.i18n.copy().experience.items);
}
