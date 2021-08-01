import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [],
})
export class CreateComponent implements OnInit {
  selectedDate: NgbDateStruct;

  constructor() {}

  ngOnInit(): void {}
}
