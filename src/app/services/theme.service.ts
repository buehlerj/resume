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
    let fontColor = '';
    switch (url) {
      case '/':
        backgroundColor = '#D5D5BD';
        fontColor = '#4C4C4C';
        break;
      case '/work':
        backgroundColor = '#4C4C4C';
        fontColor = '#ECE9E0';
        break;
      case '/projects':
        backgroundColor = '#ECE9E0';
        fontColor = '#4C4C4C';
        break;
      default:
        backgroundColor = 'white';
        break;
    }
    document.body.style.backgroundColor = backgroundColor;
  }
}
