import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
 selector: 'layout-header',
 templateUrl: 'app/shared/layout/header.component.html',
 styleUrls: ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css']
})
export class HeaderComponent {
  constructor() {}

  name: string = 'Angular2';
  loggedIn: boolean = false;

   // name: string = 'Angular2';
  @Input() name: string;
  @Output() onNameChanged = new EventEmitter<string>();

  changeName(newName: string) {
    this.onNameChanged.emit(newName);
  }
}
