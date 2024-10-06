import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-product',
  templateUrl: './banner-product.component.html',
  styleUrls: ['./banner-product.component.scss']
})
export class BannerProductComponent implements OnInit{
  projects: any[] = [];


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProjectsFromJson();
  }

  getProjectsFromJson(): void {
    this.http.get<any[]>('assets/projects/projects.json').subscribe(data => {
      this.projects = data;
    });
    if(this.projects.length > 3){
      this.projects.slice(0,3);
    }
  }

  getId(id: any){
    return btoa(id);
  }
}
