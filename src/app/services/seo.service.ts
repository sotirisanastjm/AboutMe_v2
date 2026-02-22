import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface SeoConfig {
    title: string;
    description: string;
    urlPath: string;
    keywords?: string;
    image?: string;
    type?: 'website' | 'article';
    robots?: string;
}

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    private readonly siteName = 'Anast.dev';
    private readonly baseUrl = 'https://anast.dev';
    private readonly defaultImage = 'https://anast.dev/assets/images/SotirisAnastasiadis.jpg';
    private readonly defaultRobots = 'index, follow';
    private readonly author = 'Sotiris Anastasiadis';

    constructor(
        private readonly meta: Meta,
        private readonly title: Title,
        @Inject(DOCUMENT) private readonly document: Document
    ) { }

    update(config: SeoConfig): void {
        const canonicalUrl = this.buildCanonicalUrl(config.urlPath);
        const image = this.buildImageUrl(config.image);
        const title = config.title;

        this.title.setTitle(title);

        this.updateNameTag('description', config.description);
        this.updateNameTag('keywords', config.keywords);
        this.updateNameTag('author', this.author);
        this.updateNameTag('robots', config.robots ?? this.defaultRobots);

        this.updatePropertyTag('og:type', config.type ?? 'website');
        this.updatePropertyTag('og:site_name', this.siteName);
        this.updatePropertyTag('og:locale', 'en_US');
        this.updatePropertyTag('og:title', title);
        this.updatePropertyTag('og:description', config.description);
        this.updatePropertyTag('og:url', canonicalUrl);
        this.updatePropertyTag('og:image', image);

        this.updateNameTag('twitter:card', 'summary_large_image');
        this.updateNameTag('twitter:title', title);
        this.updateNameTag('twitter:description', config.description);
        this.updateNameTag('twitter:image', image);

        this.updateCanonical(canonicalUrl);
    }

    private updateNameTag(name: string, content?: string): void {
        if (!content) {
            this.meta.removeTag(`name='${name}'`);
            return;
        }

        this.meta.updateTag({ name, content });
    }

    private updatePropertyTag(property: string, content: string): void {
        this.meta.updateTag({ property, content });
    }

    private buildCanonicalUrl(path: string): string {
        const cleanPath = path.startsWith('/') ? path : `/${path}`;
        return `${this.baseUrl}${cleanPath}`;
    }

    private buildImageUrl(image?: string): string {
        if (!image) {
            return this.defaultImage;
        }

        return image.startsWith('http') ? image : `${this.baseUrl}${image.startsWith('/') ? image : `/${image}`}`;
    }

    private updateCanonical(url: string): void {
        let linkTag = this.document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

        if (!linkTag) {
            linkTag = this.document.createElement('link');
            linkTag.setAttribute('rel', 'canonical');
            this.document.head.appendChild(linkTag);
        }

        linkTag.setAttribute('href', url);
    }
}
