import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

interface Project {
  id: string;
  name: string;
  url: string;
  description: string;
  status: 'active' | 'maintenance' | 'archived';
  tags: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, TagModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      id: '1',
      name: 'BragDoc',
      url: 'https://bragdoc.farigab.com',
      description: 'A professional achievement tracker to help you document your career wins and maintain a living record of your accomplishments.',
      status: 'active',
      tags: ['Angular', 'PrimeNG', 'TypeScript', 'Java', 'Spring', 'PostgreSQL']
    }
  ]);

  getStatusSeverity(status: Project['status']): 'success' | 'warn' | 'danger' {
    const severityMap: Record<Project['status'], 'success' | 'warn' | 'danger'> = {
      active: 'success',
      maintenance: 'warn',
      archived: 'danger'
    };
    return severityMap[status];
  }

  getStatusLabel(status: Project['status']): string {
    const labelMap: Record<Project['status'], string> = {
      active: 'Active',
      maintenance: 'Maintenance',
      archived: 'Archived'
    };
    return labelMap[status];
  }

  openProject(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
