import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

interface Technology {
  name: string;
  category: string;
  img: string;
  color: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ButtonModule, CardModule, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  technologies = signal<Technology[]>([
    { name: 'Angular', category: 'Frontend', img: 'icons/angular.png', color: '#DD0031' },
    { name: 'Java', category: 'Backend', img: 'icons/java.png', color: '#007396' },
    { name: 'Spring Framework', category: 'Backend', img: 'icons/spring.png', color: '#6DB33F' },
    { name: 'Oracle', category: 'Database', img: 'icons/oracle.png', color: '#F80000' },
    { name: 'PostgreSQL', category: 'Database', img: 'icons/postgreSQL.png', color: '#336791' }
  ]);

  highlights = signal([
    { title: 'Experience', description: 'Years of hands-on experience building production-ready applications' },
    { title: 'Modern Stack', description: 'Angular, Java, Spring, and cutting-edge web technologies' },
    { title: 'Best Practices', description: 'Clean architecture, accessibility, and performance optimization' }
  ]);
}
