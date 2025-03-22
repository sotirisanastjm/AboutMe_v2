import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    const metaTags = [
      { name: 'description', content: 'Dive into the diverse projects I have developed, from innovative web apps to blockchain-based solutions. Explore my progress and stay updated on upcoming developments!' },
      { name: 'keywords', content: 'Projects Gallery' },
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
