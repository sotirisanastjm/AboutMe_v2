import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent {
  isDarkMode: boolean = false;
  menuState: string = 'closed';

  constructor() {
    this.loadDarkModePreference();
  }
  
  
  toggleMenu(logoEvent?: boolean) {

    if(logoEvent){
      this.menuState = 'closed';
      document.body.classList.toggle('overflow-y-hidden', false);
    }else{
      this.menuState = this.menuState === 'closed' ? 'open' : 'closed';
      document.body.classList.toggle('overflow-y-hidden', this.menuState === 'open');
    }
  }
  
  loadDarkModePreference() {
    const cookies = document.cookie.split('; ');
    const darkModeCookie = cookies.find(row => row.startsWith('darkMode='));
    if (darkModeCookie && darkModeCookie.split('=')[1] === 'true') {
      this.isDarkMode = true;
      document.body.classList.add('dark');
    }
  }
  
  toggleDarkMode() {
    const body = document.body;
    this.isDarkMode = !this.isDarkMode;
    body.classList.toggle('dark', this.isDarkMode);
    document.cookie = `darkMode=${this.isDarkMode};path=/;max-age=${30 * 24 * 60 * 60}`; // 30 days
    if (this.menuState === 'open') this.toggleMenu();
  }
  
}
