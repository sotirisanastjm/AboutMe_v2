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
    { name: 'React', svg: '2' },
    { name: 'HTML', svg: '3' },
    { name: 'CSS', svg: '4' },
    { name: 'TailWindCSS', svg: '5' },
    { name: 'JavaScript', svg: '6' },
    { name: 'TypeScript', svg: '7' },
    { name: 'Sass', svg: '8' },

  ];
}
