import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
    constructor(private readonly seoService: SeoService) {}

    ngOnInit(): void {
        this.seoService.update({
            title: 'CV | Sotiris Anastasiadis',
            description: 'Curriculum Vitae of Sotiris Anastasiadis - Front-End Angular Developer based in Athens, Greece.',
            keywords: 'Sotiris Anastasiadis, CV, Resume, Front-End Developer, Angular Developer',
            urlPath: '/cv',
            image: '/assets/images/SotirisAnastasiadis.jpg'
        });
    }

    exportToPdf(): void {
        window.print();
    }
}
