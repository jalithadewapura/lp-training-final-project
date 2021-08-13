import { gql, Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const CREATE_CIVILIAN = gql`
  mutation createCivilian($firstName: String!, $lastName: String!, $dob: String!, $nid: String!, 
      $phone: String!, $email: String!, $gender: String!, $materialStatus: String!, $jobStatus:String!, 
      $monthlyIncome: Float!, $jobType: String!, $jobCategory: String!, $educationLevel: String!, 
      $educationDetails: String!, $familyId: String! ) {
    
    createCivilian(
      createCivilianInput: 
        {firstName: $firstName, lastName: $lastName, dob: $dob, nid: $nid,
        phone: $phone, email: $email, gender: $gender, materialStatus: $materialStatus, 
        jobStatus: $jobStatus, monthlyIncome: $monthlyIncome, jobType: $jobType, 
        jobCategory: $jobCategory, educationLevel: $educationLevel, 
        educationDetails: $educationDetails, familyId: $familyId})
      {
        id
      }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class CivilianService {

  constructor(private apollo: Apollo) { }

  createCivilian(firstName: string, lastName: string, dob: string, nid: string, phone: string, email: string,
    gender: string, materialStatus: string, jobStatus: string, monthlyIncome: number, jobType: string,
    jobCategory: string, educationLevel: string, educationDetails: string, familyId: string): Observable<any> {
    return this.apollo.mutate({
      mutation: CREATE_CIVILIAN,
      variables: {
        firstName,
        lastName,
        dob,
        nid,
        phone,
        email,
        gender,
        materialStatus,
        jobStatus,
        monthlyIncome,
        jobType,
        jobCategory,
        educationLevel,
        educationDetails,
        familyId
      }
    })
  }
}
