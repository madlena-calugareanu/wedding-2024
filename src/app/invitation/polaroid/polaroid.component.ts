import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-polaroid',
  templateUrl: './polaroid.component.html',
  styleUrls: ['./polaroid.component.scss'],
})
export class PolaroidComponent {
  @Input() image: any;
}
