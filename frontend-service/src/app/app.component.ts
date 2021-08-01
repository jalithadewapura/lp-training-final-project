import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend-service';
  opened: boolean = true;

  setOpened(value: boolean) {
    this.opened = value;
    console.log(this.opened);
  }
}
