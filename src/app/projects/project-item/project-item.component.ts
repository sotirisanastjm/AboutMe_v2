import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  project: any; 

  constructor(private http: HttpClient,private route: ActivatedRoute,private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      const projectId = decodeURIComponent(params['id']);
      const decodedId = atob(projectId);
      this.getProjectFromJson(decodedId);
    });
    
  }

  getProjectFromJson(id: any): void {
    this.http.get<any[]>('assets/projects/projects.json').subscribe(data => {
      this.project = data.find((project: any) => project.id === id);

      const metaTags = [
        { name: 'description', content: this.project?.description },
        { name: 'keywords', content: this.project?.logoUrl?.text },
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
    });
  }
}
