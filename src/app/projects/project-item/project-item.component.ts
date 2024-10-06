import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  project: any; 

  constructor(private http: HttpClient,private route: ActivatedRoute) {}

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
    });
  }
}
