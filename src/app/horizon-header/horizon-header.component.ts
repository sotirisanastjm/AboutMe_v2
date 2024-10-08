import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizon-header',
  templateUrl: './horizon-header.component.html',
  styleUrls: ['./horizon-header.component.scss']
})
export class HorizonHeaderComponent {
  @Input() title : string = ''
  @Input() subtitle : any = ''

}
