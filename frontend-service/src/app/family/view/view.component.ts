import { FamilyService } from 'src/app/services/family.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  id: string = "";
  family;

  jobCategories = [
    { id: "1", name: "Education Sector" },
    { id: "2", name: "Health Sector" },
    { id: "3", name: "Food Manufacturing Sector" },
    { id: "4", name: "Education Sector" },
    { id: "5", name: "Entertainment Sector" }
  ];

  constructor(private familyService: FamilyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getFamilyById(this.id);

  }

  getJobCategory(id: string) {
    for (let object of this.jobCategories) {
      if (object.id == id) {
        console.log(object.name);
        return object.name;
      }
    }
  }

  getFamilyById(id: string) {
    this.familyService.getFamilyById(id)
      .subscribe((data) => {
        this.family = data.data.familyById;
      })
  }



}
