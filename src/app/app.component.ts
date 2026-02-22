import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AboutMe_v2';

  constructor(private router: Router) {}

  ngOnInit() {
    this.printBrandingStamp();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  private printBrandingStamp(): void {
    const styles = [
      'color: #4CAF50',
      'font-size: 14px',
      'font-weight: bold',
      'text-shadow: 1px 1px 2px rgba(0,0,0,0.2)'
    ].join(';');

    console.log(
      '%c🚀 Crafted by Sotiris Anastasiadis | https://anast.dev',
      styles
    );
  }

}
