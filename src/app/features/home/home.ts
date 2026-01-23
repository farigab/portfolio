import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ButtonModule, CardModule],
  template: `
    <div class="home">
      <section class="hero">
        <h1 class="hero-title">
          Hi, I'm <span class="highlight">Farigab</span>
        </h1>
        <p class="hero-subtitle">
          Software Developer | Problem Solver | Tech Enthusiast
        </p>
        <p class="hero-description">
          Building scalable web applications with modern technologies.
          Passionate about clean code, user experience, and continuous learning.
        </p>
        <div class="hero-actions">
          <p-button
            label="View Projects"
            [routerLink]="['/projects']"
            severity="primary" />
          <p-button
            label="Get in Touch"
            [routerLink]="['/contact']"
            severity="secondary"
            [outlined]="true" />
        </div>
      </section>

      <section class="highlights">
        <p-card class="highlight-card">
          <div class="card-content">
            <h3 class="card-title">Experience</h3>
            <p class="card-description">
              Years of hands-on experience building production-ready applications
            </p>
          </div>
        </p-card>

        <p-card class="highlight-card">
          <div class="card-content">
            <h3 class="card-title">Modern Stack</h3>
            <p class="card-description">
              Angular, TypeScript, PrimeNG, and cutting-edge web technologies
            </p>
          </div>
        </p-card>

        <p-card class="highlight-card">
          <div class="card-content">
            <h3 class="card-title">Best Practices</h3>
            <p class="card-description">
              Clean architecture, accessibility, and performance optimization
            </p>
          </div>
        </p-card>
      </section>
    </div>
  `,
  styles: [
    `
    .home {
      padding: 48px 0;
    }

    .hero {
      text-align: center;
      margin-bottom: 64px;
    }

    .hero-title {
      font-size: 48px;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 16px;
      line-height: 1.2;
    }

    .highlight {
      color: var(--primary);
    }

    .hero-subtitle {
      font-size: 20px;
      font-weight: 500;
      color: var(--text-secondary);
      margin-bottom: 24px;
    }

    .hero-description {
      font-size: 16px;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto 32px;
      line-height: 1.6;
    }

    .hero-actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .highlights {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }

    .highlight-card {
      background: var(--surface);
      border-radius: 12px;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .highlight-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(107, 93, 211, 0.2);
    }

    .card-content {
      padding: 8px;
    }

    .card-title {
      font-size: 20px;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 8px;
    }

    .card-description {
      font-size: 14px;
      color: var(--text-secondary);
      line-height: 1.5;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 32px;
      }

      .hero-subtitle {
        font-size: 18px;
      }
    }
  `]
})
export class HomeComponent { }
