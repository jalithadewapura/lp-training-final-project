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


  constructor(private familyService: FamilyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getFamilyById(this.id);

  }

  getFamilyById(id: string) {
    this.familyService.getFamilyById(id)
      .subscribe((data) => {
        this.family = data.data.familyById;
      })
  }



}
