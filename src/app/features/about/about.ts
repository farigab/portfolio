import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent { }
