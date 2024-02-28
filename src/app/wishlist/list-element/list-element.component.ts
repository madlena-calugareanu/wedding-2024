import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss'],
  animations: [
    trigger('rotateIcon', [
      state('true', style({ transform: 'rotate(90deg)' })),
      state('false', style({ transform: 'rotate(0deg)' })),
      transition('false => true', animate('100ms ease-in')),
      transition('true => false', animate('100ms ease-out')),
    ]),
  ],
})
export class ListElementComponent {
  @Input() element: any;
  @Input() isSelected: any;
  @Output() sendSelection = new EventEmitter<null>();
  expanded = false;
  isRotated = false;

  ngOnInit() {}

  expand() {
    this.expanded = !this.expanded;
    this.isRotated = !this.isRotated;
  }

  selectElement() {
    this.sendSelection.emit(this.element);
    this.isSelected = true;
  }
}
