import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ButtonModule, CardModule, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  readonly i18n = inject(I18nService);
  readonly technologies = computed(() => this.i18n.copy().home.technologies);
  readonly highlights = computed(() => this.i18n.copy().home.highlights);
  readonly githubUrl = 'https://github.com/farigab';
  readonly linkedinUrl = 'https://www.linkedin.com/in/gabriel-b-f/?locale=en_US';
}
