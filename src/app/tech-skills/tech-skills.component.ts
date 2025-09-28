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
    { name: 'Nextjs', svg: '2' },
    { name: 'React', svg: '3' },
    { name: 'HTML', svg: '4' },
    { name: 'CSS', svg: '5' },
    { name: 'TailWindCSS', svg: '6' },
    { name: 'JavaScript', svg: '7' },
    { name: 'TypeScript', svg: '8' },
    { name: 'Sass', svg: '9' },
    { name: '.NET', svg: '10' },
    { name: 'Sui Move', svg: '11' },

  ];
}
