import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

interface Project {
  id: number;
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
  styleUrls: ['./projects.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      id: 1,
      name: 'BragDev',
      url: 'https://bragdoc.farigab.com',
      description: 'An automation tool that uses AI to turn commits and pull requests into clear, structured technical progress reports.',
      status: 'active',
      tags: ['Java', 'Spring', 'PostgreSQL', 'Angular', 'TypeScript', 'PrimeNG']
    },
    {
      id: 2,
      name: 'RepoFlow — Git Tools & Graph',
      url: 'https://marketplace.visualstudio.com/items?itemName=farigab.repoflow',
      description: 'A Visual Studio Code extension that provides a visual graph of your Git repository, making it easier to understand branch structures and commit history.',
      status: 'active',
      tags: ['TypeScript', 'VS Code Extension', 'Graph Visualization', 'Git Tools']
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
