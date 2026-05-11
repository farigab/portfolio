import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { FooterComponent } from './shared/components/footer/footer';
import { HeaderComponent } from './shared/components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('portfolio');
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => {
        globalThis.setTimeout(() => {
          const activeElement = this.document.activeElement;

          if (
            activeElement instanceof HTMLElement &&
            activeElement !== this.document.body &&
            activeElement.closest('.main-content')
          ) {
            activeElement.blur();
          }
        });
      });
  }
}
