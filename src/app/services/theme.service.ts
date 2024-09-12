import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateBackgroundColor(event.urlAfterRedirects);
      });
  }

  updateBackgroundColor(url: string) {
    let backgroundColor = '';
    switch (url) {
      case '/':
        backgroundColor = '#D5D5BD';
        break;
      case '/work':
        backgroundColor = '#4C4C4C';
        break;
      case '/projects':
        backgroundColor = '#E0DBCC';
        break;
      case '/homelab':
        backgroundColor = '#C2C2C2';
        break;
      default:
        backgroundColor = 'white';
        break;
    }
    document.body.style.backgroundColor = backgroundColor;
  }
}
