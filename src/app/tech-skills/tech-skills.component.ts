import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.scss']
})
export class TechSkillsComponent {
  skillsList = [
    { name: 'Sitecore', svg: '0' },
    { name: 'Angular', svg: '1' },
    { name: 'HTML', svg: '2' },
    { name: 'CSS', svg: '3' },
    { name: 'TailWindCSS', svg: '4' },
    { name: 'JavaScript', svg: '5' },
    { name: 'TypeScript', svg: '6' },
    { name: 'Sass', svg: '7' },

  ];
}
