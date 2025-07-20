import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-article',
  templateUrl: './banner-article.component.html',
})
export class BannerArticleComponent implements OnInit {
  @Input() data!: ArticleSection;

  constructor() { }

  ngOnInit(): void {

  }
  
}

interface ArticleSection {
  Title: string;
  Subtitle: string;
  Articles: Article[];
}

interface Article {
  Title: string;
  Subtitle: string;
  Image: {
    src: string;
    alt: string;
  };
  File: {
    src: string;
    extension: string;
    date: string;
  };
}


