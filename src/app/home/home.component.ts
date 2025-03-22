import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{

  constructor(private meta: Meta, private title: Title) {}
  
  ngOnInit(): void {
    const metaTags = [
      { name: 'description', content: 'I am Sotiris Anastasiadis, a dedicated front-end Angular developer located in Athens, Greece.' },
      { name: 'keywords', content: 'Font-End Angular Developer' },
      { name: 'author', content: 'Sotiris Anastasiadis' }
    ];

    metaTags.forEach(tag => {
      if (this.meta.getTag(`name="${tag.name}"`)) {
        this.meta.removeTag(`name="${tag.name}"`);
      }
    });

    metaTags.forEach(tag => {
      this.meta.addTag(tag);
    });

    this.title.setTitle('Anast.dev');
  }
}
