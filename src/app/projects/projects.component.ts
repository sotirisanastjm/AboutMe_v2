import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  constructor(private readonly seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.update({
      title: 'Projects | Sotiris Anastasiadis Portfolio',
      description: 'Explore web projects by Sotiris Anastasiadis, including modern apps, AI experiments, and blockchain-based solutions.',
      keywords: 'Projects Portfolio, Angular Projects, React Projects, Web Applications',
      urlPath: '/projects',
      image: '/assets/images/hero-image-quantumgiz.jpg'
    });
  }
}
