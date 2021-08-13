import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

const FAMILIES = gql`
  query {
    getAllFamilies{
      id
      name
      address
      monthlyIncome

      civilians{
        nid
        firstName
        lastName  
        dob    
      }   
    }
  }

`;

const FAMILY = gql`
  query familyById($id: String!) {
    familyById(id: $id){
      id
      name
      address
      monthlyIncome
      
      province {
        id
        name
      }

      district {
        id
        name
      }

      division {
        id
        name
      }

      vasama {
        id
        name
      }

      civilians{
        nid
        firstName
        lastName  
        dob  
        jobCategory
        monthlyIncome  
      }   
    }
  }
`;


const CREATE_FAMILY = gql`
  mutation createFamily($name: String!, $address: String!, $provinceId: String!, $districtId: String!, 
      $divisionId: String!, $vasamaId: String! ) {
    createFamily(createFamilyInput: {name: $name, address: $address, provinceId: $provinceId, 
      districtId: $districtId, divisionId: $divisionId, vasamaId: $vasamaId}) {
      id
    }
  }
`;


@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor(private apollo: Apollo) { }

  getFamilies(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: FAMILIES,
    }).valueChanges;
  }

  getFamilyById(id: string): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: FAMILY,
      variables: {
        id: id,
      },
    }).valueChanges;
  }

  createFamily(name, address, provinceId, districtId, divisionId, vasamaId): Observable<any> {
    return this.apollo.mutate({
      mutation: CREATE_FAMILY,
      variables: {
        name,
        address,
        provinceId,
        districtId,
        divisionId,
        vasamaId
      }
    })
  }

}
