import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../services/seo.service';

interface ProjectTechnology {
  id: string;
  name: string;
}

interface ProjectArticle {
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

interface ProjectArticleSection {
  Title: string;
  Subtitle: string;
  Articles: ProjectArticle[];
}

interface ProjectModel {
  id: string;
  name?: string;
  description?: string;
  alt?: string;
  logoRight?: boolean;
  onlyLogo?: boolean;
  heroImage?: string;
  link?: {
    url?: string;
    text?: string;
  };
  logoUrl?: {
    url?: string;
    text?: string;
  };
  bannerSection?: {
    title?: string;
    subtitle?: string;
    ImageSrc?: string;
    ImageAlt?: string;
  };
  svgIds?: ProjectTechnology[];
  infoCards?: Array<{
    title?: string;
    description?: string;
    svg?: string;
    alt?: string;
  }>;
  articleSection?: ProjectArticleSection;
  nextStepTitle?: string;
  nextSteps?: Array<{
    title?: string;
    description?: string;
  }>;
  nextSvg?: string;
  actionCard?: {
    title?: string;
    subtitle?: string;
  };
  progressCard?: {
    isCompleted?: boolean;
    percent?: string;
  };
  inProgress?: boolean;
}

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  project?: ProjectModel;

  constructor(
    private readonly http: HttpClient,
    private readonly route: ActivatedRoute,
    private readonly seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = decodeURIComponent(params['id'] ?? '');
      const decodedId = this.decodeProjectId(projectId);
      this.getProjectFromJson(decodedId);
    });
  }

  private decodeProjectId(projectId: string): string {
    try {
      return atob(projectId);
    } catch {
      return projectId;
    }
  }

  private getProjectFromJson(id: string): void {
    this.http.get<ProjectModel[]>('assets/projects/projects.json').subscribe(data => {
      this.project = data.find(project => project.id === id);
      this.updateSeo();
    });
  }

  private updateSeo(): void {
    if (!this.project) {
      this.seoService.update({
        title: 'Project | Sotiris Anastasiadis Portfolio',
        description: 'Explore this portfolio project by Sotiris Anastasiadis.',
        keywords: 'Portfolio Project, Web Development',
        urlPath: '/projects'
      });
      return;
    }

    const projectKeywords = this.project.svgIds
      ?.map(skill => skill.name)
      .filter(Boolean)
      .join(', ');

    this.seoService.update({
      title: `${this.project.name ?? 'Project'} | Project by Sotiris Anastasiadis`,
      description: this.project.description ?? 'Explore this portfolio project by Sotiris Anastasiadis.',
      keywords: projectKeywords || this.project.logoUrl?.text,
      urlPath: `/projects/${encodeURIComponent(btoa(this.project.id))}`,
      image: this.normalizeImagePath(this.project.heroImage),
      type: 'article'
    });
  }

  private normalizeImagePath(imagePath?: string): string | undefined {
    if (!imagePath) {
      return undefined;
    }

    return imagePath.replace(/^(\.\.\/)+/, '/');
  }
}
