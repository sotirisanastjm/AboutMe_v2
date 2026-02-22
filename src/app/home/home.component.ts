import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{

  constructor(private readonly seoService: SeoService) {}
  
  ngOnInit(): void {
    this.seoService.update({
      title: 'Sotiris Anastasiadis | Front-End Angular Developer',
      description: 'I am Sotiris Anastasiadis, a front-end Angular developer based in Athens, Greece, building performant and accessible web experiences.',
      keywords: 'Sotiris Anastasiadis, Front-End Developer, Angular Developer, Web Developer Portfolio, Athens',
      urlPath: '/',
      image: '/assets/images/SotirisAnastasiadis.jpg'
    });
  }
}
