import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { ExperienceItem, I18nService } from '../../core/services/i18n.service';

interface TimelineExperience extends ExperienceItem {
  icon: string;
  color: string;
}

const EXPERIENCE_MARKERS = [
  { icon: 'pi pi-star', color: '#6B5DD3' },
  { icon: 'pi pi-code', color: '#3B82F6' },
  { icon: 'pi pi-briefcase', color: '#14B8A6' },
  { icon: 'pi pi-graduation-cap', color: '#F59E0B' }
];

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ButtonModule, CardModule, TimelineModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  readonly i18n = inject(I18nService);
  readonly expandedItems = signal<Record<string, boolean>>({});
  readonly experiences = computed<TimelineExperience[]>(() =>
    this.i18n.copy().experience.items.map((item, index) => ({
      ...item,
      ...EXPERIENCE_MARKERS[index % EXPERIENCE_MARKERS.length]
    }))
  );

  isExpanded(id: string): boolean {
    return this.expandedItems()[id] ?? false;
  }

  visibleBullets(item: TimelineExperience): string[] {
    return this.isExpanded(item.id) ? item.bullets : item.bullets.slice(0, 2);
  }

  toggleItem(id: string): void {
    this.expandedItems.update((items) => ({ ...items, [id]: !items[id] }));
  }
}
