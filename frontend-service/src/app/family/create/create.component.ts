import { observable, Observable } from 'rxjs';
import { RegionService } from 'src/app/services/region.service';
import { FamilyService } from 'src/app/services/family.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  provinces = [];
  districts = [];
  divisions = [];
  vasam = [];

  constructor(private familyService: FamilyService, private regionService: RegionService, private router: Router) { }

  ngOnInit(): void {
    this.getProvinces();
  }

  createFamily(name: string, address: string, provinceId: string, districtId: string, divisionId: string, vasamaId: string): Observable<any> {
    return this.familyService.createFamily(name, address, provinceId, districtId, divisionId, vasamaId);

  }

  getProvinces() {
    this.regionService.getProvinces().subscribe((data) => {
      this.provinces = data.data.getAllProvince;
    })
  }

  getDistricts(provinceId: string) {
    if (provinceId == "") {
      this.districts = [];
    } else {
      this.regionService.getDistricts(provinceId).subscribe((data) => {
        this.districts = data.data.getDistrictsByProvince;
      });
    }

  }

  getDivisions(districtId: string) {
    if (districtId == "") {
      this.divisions = [];
    } else {
      this.regionService.getDivisions(districtId).subscribe((data) => {
        this.divisions = data.data.getDivisionsByDistrict;
      });
    }
  }


  getVasam(divisionId: string) {
    if (divisionId == "") {
      this.vasam = [];
    } else {
      this.regionService.getVasam(divisionId).subscribe((data) => {
        this.vasam = data.data.getVasamByDivision;
      });
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const response = this.createFamily(form.value.name, form.value.address, form.value.province, form.value.district, form.value.division, form.value.vasama)
      response.subscribe((data) => {
        const familyId = data.data.createFamily.id;
        this.router.navigate(['/family/' + familyId]);
      })
    }

  }

}
