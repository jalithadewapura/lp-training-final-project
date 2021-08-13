import { CivilianService } from 'src/app/services/civilian.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class CreateComponent implements OnInit {

  jobStatus = [
    { id: "1", name: "Student" },
    { id: "2", name: "Employee with permenent job" },
    { id: "3", name: "Employee without permenent job" },
    { id: "3", name: "Retired employee" }
  ];

  jobTypes = [
    { id: "1", name: "Goverment Sector" },
    { id: "2", name: "Private Sector" },
    { id: "3", name: "Own Business" },
    { id: "4", name: "Other" }
  ];

  jobCategories = [
    { id: "1", name: "Education Sector" },
    { id: "2", name: "Health Sector" },
    { id: "3", name: "Food Manufacturing Sector" },
    { id: "4", name: "Education Sector" },
    { id: "5", name: "Entertainment Sector" }
  ];

  educationLevels = [
    { id: "1", name: "SLQL 01" },
    { id: "2", name: "SLQL 02" },
    { id: "3", name: "SLQL 03" },
    { id: "4", name: "SLQL 04" },
    { id: "5", name: "SLQL 05" },
    { id: "6", name: "SLQL 06" },
    { id: "7", name: "SLQL 07" },
    { id: "8", name: "SLQL 08" },
    { id: "9", name: "SLQL 09" },
    { id: "10", name: "SLQL 10" }
  ];

  familyId: string;
  dob: string; //mat-date-picker

  constructor(private civilianService: CivilianService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.familyId = this.route.snapshot.paramMap.get('familyId');
  }

  createCivilian(firstName: string, lastName: string, dob: string, nid: string, phone: string, email: string,
    gender: string, materialStatus: string, jobStatus: string, monthlyIncome: number, jobType: string, jobCategory: string,
    educationLevel: string, educationDetails: string, familyId: string) {

    this.civilianService.createCivilian(firstName, lastName, dob, nid, phone, email, gender, materialStatus,
      jobStatus, monthlyIncome, jobType, jobCategory, educationLevel, educationDetails, familyId).subscribe((result) => {
        console.log(result.data.createCivilian);
      });
  }

  onChangeDob(value) {
    console.log(value);
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.createCivilian(
        form.value.firstName,
        form.value.lastName,
        form.value.dob,
        form.value.nid,
        form.value.phone,
        form.value.email,
        form.value.gender,
        form.value.status,
        form.value.jobStatus,
        form.value.monthlyIncome,
        form.value.jobType,
        form.value.jobCategory,
        form.value.educationLevel,
        form.value.educationDetails,
        this.familyId);
    }
  }
}
