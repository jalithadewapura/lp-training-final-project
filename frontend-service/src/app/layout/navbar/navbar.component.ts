import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  opened: boolean = true;
  @Output() toggleEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.opened = !this.opened;
    this.toggleEvent.emit(this.opened);
  }
}
