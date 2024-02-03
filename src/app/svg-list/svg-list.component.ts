import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-list',
  templateUrl: './svg-list.component.html',
  styleUrls: ['./svg-list.component.scss']
})
export class SvgListComponent {
  @Input() svg: string = '';
}
