import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
  constructor() {}

  name: string = 'Ta Chatte';

  setName(newName: string) {
    this.name = newName;
  }

  // implement OnInit's `ngOnInit` method
  ngOnInit() { console.log(`OnInit`); }
}
