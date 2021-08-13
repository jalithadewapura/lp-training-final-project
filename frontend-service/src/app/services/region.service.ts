import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { gql, Apollo } from 'apollo-angular';

const PROVINCES = gql`
  query {
    getAllProvince {
      name
      id
    }
  }
`;

const DISTRICTS = gql`
  query getDistrictsByProvince($provinceId: String!) {
    getDistrictsByProvince(provinceId: $provinceId) {
      name
      id
    }
  }
`;

const DIVISIONS = gql`
  query getDivisionsByDistrict($districtId: String!) {
    getDivisionsByDistrict(districtId: $districtId) {
      name
      id
    }
  }
`;

const VASAM = gql`
  query getVasamByDivision($divisionId: String!) {
    getVasamByDivision(divisionId: $divisionId) {
      name
      id
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private apollo: Apollo) { }

  getProvinces(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: PROVINCES
    }).valueChanges;
  }

  getDistricts(provinceId: string): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: DISTRICTS,
      variables: {
        provinceId: provinceId,
      },
    }).valueChanges;
  }

  getDivisions(districtId: string): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: DIVISIONS,
      variables: {
        districtId: districtId
      }
    }).valueChanges;
  }

  getVasam(divisionId: string): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: VASAM,
      variables: {
        divisionId: divisionId
      }
    }).valueChanges;
  }
}
