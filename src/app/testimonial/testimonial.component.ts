import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit{

  year: any;

  constructor() {}

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

}
