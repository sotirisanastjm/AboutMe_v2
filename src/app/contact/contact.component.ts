import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  message: any = '';
  htmlResponse: any;
  submited: boolean = false;
  constructor(private http: HttpClient, private route: ActivatedRoute, private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let submit = decodeURIComponent(params['submit']);
      if (submit === 'true') {
        this.submited = true;
        document.body.classList.toggle('overflow-y-hidden', this.submited);
        let updatedUrl = document.location.pathname.replace("/true", "");
        history.replaceState(null, "", updatedUrl);
      }
    });

    this.htmlResponse = `
    Hello,
    
    Thank you for getting in touch through my website! I’ve received your message and will get back to you as soon as possible.
    
    Best regards,
    Anastasiadis Sotirios`;

    const metaTags = [
      { name: 'description', content: 'I am Sotiris Anastasiadis, Feel free to share your thoughts or ask anything!' },
      { name: 'keywords', content: 'Contact Me!' },
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

  }

closePopup() {
  this.submited = false;
  document.body.classList.toggle('overflow-y-hidden', this.submited);
}
}
