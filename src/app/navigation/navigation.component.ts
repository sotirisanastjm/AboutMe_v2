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

  
  toggleMenu() {
    this.menuState = this.menuState === 'closed' ? 'open' : 'closed';
    document.body.classList.toggle('overflow-y-hidden', this.menuState === 'open');
  }
  toggleDarkMode() {
    var body = document.body;
    this.isDarkMode = !this.isDarkMode;
    body.classList.toggle('dark');
  }
  
}
