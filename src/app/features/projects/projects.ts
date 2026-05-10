import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { I18nService, PortfolioProject } from '../../core/services/i18n.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, TagModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  readonly i18n = inject(I18nService);
  readonly projects = computed(() => this.i18n.copy().projects.items);

  getStatusSeverity(status: PortfolioProject['status']): 'success' | 'warn' | 'danger' {
    const severityMap: Record<PortfolioProject['status'], 'success' | 'warn' | 'danger'> = {
      active: 'success',
      maintenance: 'warn',
      archived: 'danger'
    };
    return severityMap[status];
  }

  getStatusLabel(status: PortfolioProject['status']): string {
    return this.i18n.copy().labels[status];
  }

  openProject(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
