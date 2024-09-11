import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFile,
  faServer,
  faHome,
  faIdBadge,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'resume-landing';
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFile = faFile;
  faServer = faServer;
  faHome = faHome;
  faIdBadge = faIdBadge;
}
