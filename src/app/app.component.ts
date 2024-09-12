import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFile,
  faServer,
  faCode,
  faHome,
  faIdBadge,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule,
    MatTooltipModule,
    FontAwesomeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // Icons
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faHome = faHome;

  // Class
  title = 'resume-landing';
  navbarItems: any[];

  constructor(private themeService: ThemeService) {
    this.navbarItems = [
      { label: 'About Jeff', icon: faIdBadge, route: '/' },
      { label: 'Work Experience', icon: faFile, route: '/work' },
      { label: 'Personal Projects', icon: faCode, route: '/projects' },
      { label: 'Home Lab', icon: faServer, route: '/homelab' },
    ];
  }
}
