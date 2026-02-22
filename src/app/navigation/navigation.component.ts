import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent {
  isDarkMode = false;
  menuState: 'open' | 'closed' = 'closed';

  constructor() {
    this.loadDarkModePreference();
  }
  toggleMenu(logoEvent?: boolean): void {
    if (logoEvent) {
      this.menuState = 'closed';
      document.body.classList.toggle('overflow-y-hidden', false);
      document.body.classList.toggle('fixed', false);
    } else {
      this.menuState = this.menuState === 'closed' ? 'open' : 'closed';
      document.body.classList.toggle('overflow-y-hidden', this.menuState === 'open');
      document.body.classList.toggle('fixed', this.menuState === 'open');
    }
  }

  @HostListener('document:keydown.escape')
  closeMenuOnEscape(): void {
    if (this.menuState === 'open') {
      this.toggleMenu();
    }
  }

  loadDarkModePreference(): void {
    const cookies = document.cookie.split('; ');
    const darkModeCookie = cookies.find(row => row.startsWith('darkMode='));

    if (darkModeCookie && darkModeCookie.split('=')[1] === 'true') {
      this.isDarkMode = true;
      document.body.classList.add('dark');
    }
  }

  toggleDarkMode(): void {
    const body = document.body;
    const secureFlag = window.location.protocol === 'https:' ? ';Secure' : '';

    this.isDarkMode = !this.isDarkMode;
    body.classList.toggle('dark', this.isDarkMode);
    document.cookie = `darkMode=${this.isDarkMode};path=/;max-age=${30 * 24 * 60 * 60};SameSite=Lax${secureFlag}`;

    if (this.menuState === 'open') {
      this.toggleMenu();
    }
  }
}
