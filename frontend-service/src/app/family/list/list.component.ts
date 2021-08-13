import { FamilyService } from 'src/app/services/family.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  families = [];
  constructor(private familyService: FamilyService) { }


  getFamilies() {
    this.familyService.getFamilies().subscribe((data) => {
      this.families = data.data.getAllFamilies;
    })
  }

  ngOnInit(): void {
    this.getFamilies();
  }

}
